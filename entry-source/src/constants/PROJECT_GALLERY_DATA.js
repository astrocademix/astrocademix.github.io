export const PROJECT_GALLERY = {
  "Computer Vision": {
    Beginner: [
      {
        id: "cv-b1",
        name: "Hand Digit Recognizer",
        description: "Classifies hand-drawn digits using a custom ANN and NumPy.",
        tech: ["NumPy", "Canvas", "Vanilla JS"],
        link: "https://hand-digit-recognizer.vercel.app",
        image: "/assets/images/project-gallery/vision/beginner/hand-digit.png",
      },
      {
        id: "cv-b2",
        name: "Dog Breed Classifier",
        description: "Fine-tuned MobileNetV2 to classify 10 dog breeds.",
        tech: ["PyTorch", "Transfer Learning", "MobileNetV2"],
        link: "https://huggingface.co/spaces/McKlay/DogBreedClassfier-mobilenetV2",
        image: "/assets/images/project-gallery/vision/beginner/dog-breed.png",
      },
      {
        id: "cv-b3",
        name: "Lung Cancer Detection",
        description: "Detects cancerous CT scans using a fine-tuned ResNet50.",
        tech: ["ResNet", "Kaggle", "Medical Imaging"],
        link: "https://huggingface.co/spaces/McKlay/CTScan-LungCancer-ResNet50",
        image: "/assets/images/project-gallery/vision/beginner/lung.png",
      },
      {
        id: "cv-b4",
        name: "Traffic Sign Classification",
        description: "This project performs traffic sign classification using a fine-tuned EfficientNetB0 model on the GTSRB dataset.",
        tech: ["EfficientNetB0", "Gradio", "Data Augmentation"],
        link: "https://huggingface.co/spaces/McKlay/traffic-sign-classification-efficientnetb0",
        image: "/assets/images/project-gallery/vision/beginner/traffic-sign.png",
      },
      {
        id: "cv-b5",
        name: "AI Meme Generator",
        description: "Instantly generate meme captions using AI.",
        tech: ["BLIP (Salesforce)", "Flan-T5-small", "opencv"],
        link: "https://huggingface.co/spaces/McKlay/AI-Meme-Generator",
        image: "/assets/images/project-gallery/vision/beginner/ai-meme.png",
      },
      {
        id: "cv-b6",
        name: "Flower Type Classifier",
        description: "Upload a flower image and get the top 5 predictions with confidence scores.",
        tech: ["EfficientNetV2B0", "TensorFlow", "Transfer Learning"],
        link: "https://huggingface.co/spaces/McKlay/efficientnet-flower-classifier",
        image: "/assets/images/project-gallery/vision/beginner/flower.png",
      }
    ],
    Intermediate: [
      {
        id: "cv-i1",
        name: "Neural Network Logic Gates",
        description: "A C# WinForms application that trains a basic neural network using **backpropagation** to simulate **5-input logic gates** — AND, OR, and XOR.",
        tech: ["backpropagation", "5-input logic gates", "C# WinForms"],
        link: "https://github.com/McKlay/NeuralNetworkLogicGates",
        image: "/assets/images/project-gallery/vision/intermediate/nn-logic.png",
      },
      {
        id: "cv-i2",
        name: "Face Mask Detection",
        description: "Detects whether people are wearing masks using a fine-tuned YOLOv5l model.",
        tech: ["YOLOv5l", "pytorch", "object-detection"],
        link: "https://huggingface.co/spaces/McKlay/Face-Mask-Detection-YOLOv5l",
        image: "/assets/images/project-gallery/vision/intermediate/face-mask.png",
      },
      {
        id: "cv-i3",
        name: "Hand Digit Recognizer",
        description: "Classifies hand-drawn digits using a custom ANN and NumPy.",
        tech: ["NumPy", "fastAPI", "Custom Neural Network"],
        link: "https://hand-digit-recognizer.vercel.app",
        image: "/assets/images/project-gallery/vision/intermediate/hand-digit.png",
      }
    ],
    Advanced: [
      {
        id: "cv-a1",
        name: "Drone AI-powered camera system for Thermal Image Processing",
        description: "COMING SOON ...",
        tech: ["YOLOv8", "SLAM & Visual Odometry", "Object Tracking"],
        link: "https://github.com/McKlay",
        image: "/assets/images/project-gallery/vision/advanced/lung.png",
      },
      {
        id: "cv-a2",
        name: "Cinematic FPV Tracking System",
        description: "COMING SOON ...",
        tech: ["DeepSORT ", "RAFT"],
        link: "https://github.com/McKlay",
        image: "/assets/images/project-gallery/vision/advanced/traffic-sign.png",
      },
      {
        id: "cv-a3",
        name: "ScanlyAI—Intelligent Document Processing",
        description: "ScanlyAI is a tool that reads receipts and invoices, pulls out useful info, and organizes it for easy tracking.",
        tech: ["FastAPI", "Tesseract OCR", "gpt-5-chat-latest"],
        link: "https://neo-scanlyai.vercel.app/",
        image: "/assets/images/project-gallery/vision/advanced/ScanlyAI-data.png",
      }
    ],
  },

  "Natural Language Processing": {
    Beginner: [
      {
        id: "nlp-b1",
        name: "AI Meme Generator",
        description: "Instantly generate meme captions using AI.",
        tech: ["BLIP (Salesforce)", "Flan-T5-small", "opencv"],
        link: "https://huggingface.co/spaces/McKlay/AI-Meme-Generator",
        image: "/assets/images/project-gallery/vision/beginner/ai-meme.png",
      },
      {
        id: "nlp-b2",
        name: "Crypto Market Sentiment",
        description: "Real-time crypto sentiment + price prediction using FinBERT + LSTM.",
        tech: ["FinBERT", "LSTM", "Hugging Face", "Docker"],
        link: "https://github.com/McKlay/CryptoSentimentProject",
        image: "/assets/images/project-gallery/nlp/advanced/crypto.png",
      },
      {
        id: "nlp-b3",
        name: "Smart Caption Generator",
        description: "COMING SOON ... Tiny T5-based app that generates text captions from input text.",
        tech: ["T5", "Gradio", "Text Generation"],
        link: "https://github.com/McKlay",
        image: "/assets/images/project-gallery/nlp/beginner/ai-meme.png",
      }
    ],
    Intermediate: [
      {
        id: "nlp-i1",
        name: "Sentiment Analysis V2",
        description: "BERT-based app for sentiment classification with confidence scores.",
        tech: ["BERT", "FastAPI", "Docker"],
        link: "https://sentiment-analysis-v2.vercel.app/",
        image: "/assets/images/project-gallery/nlp/intermediate/sentiment.png",
      }
    ],
    Advanced: [
      {
        id: "nlp-a1",
        name: "ClayBot",
        description: "Clay's Portfolio chatbot built using openAI LLM model.",
        tech: ["OpenAI GPT-3.5-turbo", "text-embedding-3-small", "supabase"],
        link: "https://clay-portfolio.netlify.app/",
        image: "/assets/images/project-gallery/nlp/advanced/clay-bot.png",
      },
      {
        id: "nlp-a2",
        name: "Coming Soon",
        description: "Real-time crypto sentiment + price prediction using FinBERT + LSTM.",
        tech: ["FinBERT", "LSTM", "Hugging Face", "Docker"],
        link: "https://github.com/McKlay/CryptoSentimentProject",
        image: "/assets/images/project-gallery/nlp/advanced/crypto.png",
      }
    ],
  },

  "Documentations": [
    {
      id: "doc01",
      name: "PyTorch Builder’s Companion Book",
      description: "A human-readable, API-structured technical book that explores the core of `torch` — the beating heart of PyTorch.",
      tech: ["torch.Tensor", "torch.linalg", "torch.utils.data"],
      link: "https://mcklay.github.io/pytorch-companion-book",
      image: "/assets/images/project-gallery/docs/pytorch.png",
    },
    {
      id: "doc02",
      name: "Tensorflow Builder’s Companion Book",
      description: "From Tensors to Vision & NLP — a deep dive into TensorFlow for learners, builders, and researchers.",
      tech: ["tf.GradientTape", "tf.keras", "tf.function"],
      link: "https://mcklay.github.io/TensorFlow-Companion-Book",
      image: "/assets/images/project-gallery/docs/tensorflow.png",
    },
    {
      id: "doc03",
      name: "CNN Builder’s Companion Book",
      description: "From Pixels to Patterns — a deep, code-first journey into Convolutional Neural Networks for real-world computer vision.",
      tech: ["cnn.Conv2D", "cnn.MaxPool2D", "cnn.ReLu", "cnn.Sequential"],
      link: "https://mcklay.github.io/cnn-companion-book",
      image: "/assets/images/project-gallery/docs/cnn.png",
    },
    {
      id: "doc04",
      name: "MLOps Project HandBook",
      description: "From cost-conscious builders to cloud-ready engineers—this is your blueprint for real-world AI.",
      tech: ["mlops.Tracking", "mlops.Deployment", "mlops.Pipeline", "mlops.Monitoring"],
      link: "https://mcklay.github.io/MLops-Project-Handbook/",
      image: "/assets/images/project-gallery/docs/mlops.png",
    },
    {
      id: "doc05",
      name: "AI Chatbot Engineering",
      description: "From prototype to platform—building, scaling, and monetizing intelligent chatbots in the era of large language models.",
      tech: ["ai_chatbot.IntentRecognition", "ai_chatbot.PromptEngineering", "ai_chatbot.Monitoring"],
      link: "https://mcklay.github.io/ai-chatbot-engineering/",
      image: "/assets/images/project-gallery/docs/chatbot.png",
    },
    {
      id: "doc06",
      name: "Codebase Architecture: Designing for Scale, Modularity, and Sanity",
      description: "A practical, developer-first handbook for structuring React + FastAPI projects—from AI MVPs to scalable platforms.",
      tech: ["codebase.Frontend()", "codebase.Backend()", "codebase.Database()", "codebase.AIIntegration()"],
      link: "https://mcklay.github.io/codebase-architecture/",
      image: "/assets/images/project-gallery/docs/codebase_arch.png",
    }
  ]
};
