# Rizzgod

## Project Overview
Rizzgod is an AI-powered web application designed to help users craft witty and engaging responses for dating apps like Tinder and Bumble. Users can upload screenshots of their chat conversations or input a bio of the person they want to flirt with, and the AI will generate clever, context-aware replies instantly. The app aims to enhance users' dating experiences by providing real-time, personalized suggestions that improve their chances of making meaningful connections.

## Tech Stack
- **Frontend Framework**: React + Next.js
- **UI Library**: Tailwind CSS + ShadCN
- **Backend (BaaS)**: Supabase
- **Deployment**: Vercel

## Features
1. **Screenshot Upload and Text Extraction**: Users can upload screenshots of dating app chats, and the app uses OCR to extract text.
2. **Bio Input and Analysis**: Users can manually input a bio or chat context for AI analysis.
3. **AI-Powered Response Generation**: The app integrates with an AI model to generate witty, context-aware responses.
4. **Response Customization**: Users can tweak generated responses before using them.
5. **Chat History and Favorites**: Users can save their favorite responses and view past interactions.
6. **Real-Time Updates**: Supabase real-time features enable instant updates when new responses are generated.
7. **User Preferences**: Users can set preferences for response tone (e.g., funny, romantic, casual).

## Setup Instructions
1. Clone the repository: `git clone https://github.com/your-repo/rizzgod.git`
2. Install dependencies: `npm install` or `yarn install`
3. Set up Supabase:
   - Create a Supabase project.
   - Add environment variables for Supabase URL and API key.
4. Set up AI API:
   - Integrate OpenAI GPT or similar AI model.
   - Add API key to environment variables.
5. Run the app locally: `npm run dev` or `yarn dev`
6. Deploy to Vercel:
   - Push changes to the main branch.
   - Connect the repository to Vercel for automatic deployment.

## Design Guidelines
- **Color Palette**: Soft pink (#FF6B6B), Light gray (#F0F0F0), Teal (#4ECDC4)
- **Typography**: Headings - Poppins (bold, modern), Body Text - Inter (clean, readable)
- **Layout**: Minimalist design with ample white space and card-based layout for responses.
- **Interactions**: Smooth animations for button clicks and transitions.
- **Accessibility**: Ensure all components are keyboard-navigable and screen-reader friendly.
