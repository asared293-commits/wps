import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "5mb" }));

  // Initialize Gemini AI Client
  let ai: GoogleGenAI | null = null;
  if (process.env.GEMINI_API_KEY) {
    try {
      ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    } catch (e) {
      console.warn("Failed to initialize GoogleGenAI:", e);
    }
  }

  // AI Productivity Assistant Endpoint for Live Interactive Playground
  app.post("/api/ai-assistant", async (req, res) => {
    try {
      const { action, text, context } = req.body;

      if (!text || typeof text !== "string") {
        return res.status(400).json({ error: "Missing or invalid 'text' parameter." });
      }

      if (!ai && !process.env.GEMINI_API_KEY) {
        // Fallback realistic responses if GEMINI_API_KEY is not configured yet
        return res.json({
          result: getFallbackAiResult(action, text),
          isFallback: true,
        });
      }

      if (!ai && process.env.GEMINI_API_KEY) {
        ai = new GoogleGenAI({
          apiKey: process.env.GEMINI_API_KEY,
          httpOptions: {
            headers: {
              "User-Agent": "aistudio-build",
            },
          },
        });
      }

      let systemPrompt = "You are WPS AI, an intelligent productivity assistant integrated into WPS Office. Respond concisely, professionally, and cleanly with direct polished output.";
      let userPrompt = "";

      switch (action) {
        case "rewrite":
          userPrompt = `Rewrite the following text to make it more professional, clear, and engaging:\n\n"${text}"`;
          break;
        case "summarize":
          userPrompt = `Provide a bulleted, high-impact summary of the key takeaways from this document content:\n\n"${text}"`;
          break;
        case "proofread":
          userPrompt = `Proofread the following text. Correct grammar, spelling, and tone, then explain brief key improvements made:\n\n"${text}"`;
          break;
        case "generate_ideas":
          userPrompt = `Generate 5 creative, practical, and action-oriented ideas or expansion points based on this topic:\n\n"${text}"`;
          break;
        case "analyze":
          userPrompt = `Perform a quick executive document analysis on the following text (Key Highlights, Tone & Sentiment, Suggested Action Items):\n\n"${text}"`;
          break;
        case "improve":
          userPrompt = `Enhance the structure, word choice, and visual formatting of the following text for maximum clarity:\n\n"${text}"`;
          break;
        default:
          userPrompt = `Help improve and refine the following document content:\n\n"${text}"`;
      }

      if (ai) {
        const response = await ai.models.generateContent({
          model: "gemini-3.6-flash",
          contents: userPrompt,
          config: {
            systemInstruction: systemPrompt,
            temperature: 0.7,
          },
        });

        const outputText = response.text || "No response generated.";
        return res.json({ result: outputText, isFallback: false });
      } else {
        return res.json({
          result: getFallbackAiResult(action, text),
          isFallback: true,
        });
      }
    } catch (err: any) {
      console.error("Error calling Gemini API:", err);
      return res.status(500).json({
        error: "Failed to process AI request.",
        message: err.message,
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", service: "wps-office-landing" });
  });

  // Vite middleware for development vs static serve for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`WPS Office Landing Page server running on http://0.0.0.0:${PORT}`);
  });
}

function getFallbackAiResult(action: string, text: string): string {
  const truncated = text.length > 80 ? text.substring(0, 80) + "..." : text;
  switch (action) {
    case "rewrite":
      return `[WPS AI Rewritten Version]:\n"${text.trim()}"\n\n✨ Polished to sound authoritative, precise, and executive-ready for your presentation or report.`;
    case "summarize":
      return `[WPS AI Executive Summary]:\n• Core Theme: Efficient document creation and workflow optimization.\n• Key Finding: Implementing streamlined templates saves up to 3.5 hours per week.\n• Recommendation: Utilize unified PDF conversion and AI proofreading prior to final distribution.`;
    case "proofread":
      return `[WPS AI Proofread Output]:\nNo major errors found. Enhanced sentence cadence and replaced repetitive phrasing for crisp readability.`;
    case "generate_ideas":
      return `[WPS AI Brainstorming Results for "${truncated}"]:\n1. Create a standardized template for team alignment.\n2. Add visual data charts summarizing monthly metrics.\n3. Incorporate interactive PDF review comments.\n4. Export multi-format summaries for stakeholders.\n5. Schedule automated weekly status updates.`;
    case "analyze":
      return `[WPS AI Sentiment & Structural Analysis]:\n• Readability Grade: High (Professional / Academic)\n• Tone: Analytical & Persuasive\n• Structural Density: 3 Key Paragraphs with clear thematic focus.`;
    case "improve":
      return `[WPS AI Enhanced Formatting]:\nFormatting aligned to standard corporate publishing guidelines with optimized section headers and bullet hierarchy.`;
    default:
      return `[WPS AI Output]: Successfully processed "${truncated}" using WPS AI productivity suite.`;
  }
}

startServer();
