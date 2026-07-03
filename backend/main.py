from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

import os
import shutil

from utils import extract_text

app = FastAPI()

# ======================================================
# CORS
# ======================================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ======================================================
# Upload Folder
# ======================================================

UPLOAD_FOLDER = "uploads"

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

# ======================================================
# Allowed File Types
# ======================================================

ALLOWED_EXTENSIONS = [
    ".pdf",
    ".docx",
    ".txt",
    ".pptx",
    ".xlsx",
    ".csv"
]

# ======================================================
# Store Extracted Document Text
# ======================================================

DOCUMENT_TEXT = ""

# ======================================================
# Home
# ======================================================

@app.get("/")
def home():
    return {
        "message": "PlantMind AI Backend Running"
    }

# ======================================================
# Upload API
# ======================================================

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):

    global DOCUMENT_TEXT

    extension = os.path.splitext(file.filename)[1].lower()

    if extension not in ALLOWED_EXTENSIONS:
        raise HTTPException(
            status_code=400,
            detail="Unsupported file type."
        )

    filepath = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    DOCUMENT_TEXT = extract_text(filepath)

    return {
        "message": "File uploaded successfully",
        "filename": file.filename
    }

# ======================================================
# Chat Request Model
# ======================================================

class ChatRequest(BaseModel):
    question: str

# ======================================================
# AI Chat (Offline)
# ======================================================

@app.post("/chat")
async def chat(request: ChatRequest):

    global DOCUMENT_TEXT

    if DOCUMENT_TEXT == "":
        return {
            "answer": "Please upload a document first."
        }

    question = request.question.lower().strip()

    paragraphs = [
        p.strip()
        for p in DOCUMENT_TEXT.split("\n")
        if p.strip()
    ]

    keywords = question.split()

    scored = []

    for para in paragraphs:

        score = 0

        text = para.lower()

        for word in keywords:
            if word in text:
                score += 1

        if score > 0:
            scored.append((score, para))

    scored.sort(key=lambda x: x[0], reverse=True)

    if len(scored) == 0:
        return {
            "answer": "Sorry, I couldn't find anything related to your question in the uploaded document."
        }

    answer = ""

    added = set()

    for score, para in scored:

        if para not in added:

            answer += para + "\n\n"

            added.add(para)

        if len(answer) > 1200:
            break

    return {
        "answer": answer
    }

# ======================================================
# Search API
# ======================================================

@app.get("/search")
async def search_document(keyword: str):

    global DOCUMENT_TEXT

    if DOCUMENT_TEXT == "":
        return {
            "result": "No document uploaded."
        }

    keyword = keyword.lower()

    lines = DOCUMENT_TEXT.split("\n")

    results = []

    for line in lines:

        if keyword in line.lower():
            results.append(line)

    if len(results) == 0:
        return {
            "result": "Keyword not found."
        }

    return {
        "result": "\n".join(results)
    }

# ======================================================
# Summary API
# ======================================================

@app.get("/summary")
async def get_summary():

    global DOCUMENT_TEXT

    if DOCUMENT_TEXT == "":
        return {
            "summary": "No document uploaded."
        }

    paragraphs = [
        p.strip()
        for p in DOCUMENT_TEXT.split("\n")
        if p.strip()
    ]

    summary = ""

    for para in paragraphs:

        summary += para + "\n\n"

        if len(summary) > 1200:
            break

    return {
        "summary": summary
    }