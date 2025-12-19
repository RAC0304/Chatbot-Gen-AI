import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const HISTORY_FILE = path.join(process.cwd(), 'data', 'chat-history.json')

// Ensure data directory exists
async function ensureDataDir() {
  const dataDir = path.join(process.cwd(), 'data')
  try {
    await fs.access(dataDir)
  } catch {
    await fs.mkdir(dataDir, { recursive: true })
  }
}

// GET - Read chat history
export async function GET() {
  try {
    await ensureDataDir()
    
    try {
      const data = await fs.readFile(HISTORY_FILE, 'utf-8')
      return NextResponse.json(JSON.parse(data))
    } catch {
      // File doesn't exist yet, return empty array
      return NextResponse.json([])
    }
  } catch (error) {
    console.error('Error reading chat history:', error)
    return NextResponse.json({ error: 'Failed to read chat history' }, { status: 500 })
  }
}

// POST - Save chat history
export async function POST(request: Request) {
  try {
    await ensureDataDir()
    
    const chatHistory = await request.json()
    await fs.writeFile(HISTORY_FILE, JSON.stringify(chatHistory, null, 2), 'utf-8')
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error saving chat history:', error)
    return NextResponse.json({ error: 'Failed to save chat history' }, { status: 500 })
  }
}

// DELETE - Delete a specific chat
export async function DELETE(request: Request) {
  try {
    await ensureDataDir()
    
    const { chatId } = await request.json()
    
    const data = await fs.readFile(HISTORY_FILE, 'utf-8')
    const chatHistory = JSON.parse(data)
    const filteredHistory = chatHistory.filter((chat: any) => chat.id !== chatId)
    
    await fs.writeFile(HISTORY_FILE, JSON.stringify(filteredHistory, null, 2), 'utf-8')
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting chat:', error)
    return NextResponse.json({ error: 'Failed to delete chat' }, { status: 500 })
  }
}
