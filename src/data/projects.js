export const projectCategories = [
  "All Projects",
  "Full Stack Development",
  "AI & Machine Learning",
  "Healthcare",
  "Academic Projects"
];

export const projects = [
  {
    id: "jobconnect",
    name: "JobConnect – Smart Recruitment Platform",
    category: "Full Stack Development",
    secondaryCategories: ["Full Stack Development"],
    badge: "Independently Developed",
    isFeatured: true,
    github: "https://github.com/dipaliparkhede/JobConnect",
    liveDemo: null, // No unverified URL
    gradient: "from-violet-600 to-indigo-700",
    accentColor: "#8B5CF6",
    tagline: "Enterprise-grade MERN job portal with intelligent resume parsing & candidate matching",
    description: "JobConnect is a full-stack job portal and recruitment management platform that connects job seekers, recruiters, and administrators through an integrated hiring workflow.",
    overview: "Built independently from scratch as a production-style MERN architecture, JobConnect addresses the modern hiring friction between candidate discovery and recruiter workflows. It features comprehensive role-based authorization, dynamic multi-stage application tracking, and an automated PDF resume parsing engine that syncs candidate profiles with one click.",
    
    keyFeatures: [
      "Role-Based Authentication: Strict isolation across Job Seeker, Recruiter, and SuperAdmin dashboards with JWT and HTTP-only session tokens.",
      "Automated PDF Resume Parser: Extracts contact details, estimated experience, and tech skills directly into the profile.",
      "Smart Job Recommendation Engine: Deterministic matching algorithm evaluating skills (50%), experience (20%), location (15%), job type (10%), and education (5%).",
      "Interactive Candidate Pipeline: Visual stage tracking (Pending → Reviewed → Shortlisted → Interview → Hired / Rejected).",
      "Interview Scheduling: Calendar scheduling with Google Meet links, time slot coordination, and recruiter notes.",
      "SuperAdmin Governance: Platform-wide telemetry, employer verification queue, job listing moderation, and immutable audit logs.",
      "Faceted Search & Filters: Real-time filtering by role, location (Remote/Hybrid/Onsite), salary, and experience levels."
    ],

    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT Auth",
      "Vite",
      "RESTful API"
    ],

    architecture: {
      frontend: "React 18 SPA with Vite, Tailwind CSS, Lucide icons, responsive navigation & dashboard layouts.",
      backend: "Node.js & Express.js REST API structured with MVC pattern, JWT route guards, and error middleware.",
      database: "MongoDB with Mongoose schemas for Users, Jobs, Applications, Companies, and System Audit Logs.",
      security: "Bcryptjs password hashing, JWT stateless access tokens, sanitized input validation, and CORS."
    },

    highlights: [
      { label: "Architecture", val: "MERN 3-Tier" },
      { label: "Role Portals", val: "3 Isolated" },
      { label: "Match Engine", val: "5-Factor Weighted" },
      { label: "Status", val: "Fully Implemented" }
    ]
  },
  {
    id: "krushimitra-ai",
    name: "KrushiMitra AI – Agriculture Advisory",
    category: "AI & Machine Learning",
    secondaryCategories: ["AI & Machine Learning", "Academic Projects"],
    badge: "Academic / Collaborative Project",
    isFeatured: true,
    github: "https://github.com/dipaliparkhede/KrushiMitraAI_Application_Project",
    liveDemo: null,
    gradient: "from-emerald-600 to-teal-700",
    accentColor: "#10B981",
    tagline: "AI-powered crop health diagnostics, yield prediction, and precision agriculture intelligence",
    description: "KrushiMitra AI is an intelligent agriculture advisory platform designed to help farmers with AI-powered crop insights, disease detection, soil recommendations, and agricultural information.",
    overview: "KrushiMitra AI bridges modern machine learning with practical farming needs. It provides proactive crop disease diagnosis using computer vision, data-backed soil and fertilizer recommendations, localized market price telemetry, and a multilingual voice interface to overcome digital literacy barriers.",

    keyFeatures: [
      "Plant Disease Detection: Computer vision inference leveraging EfficientNet-B0 architecture for leaf pathology identification.",
      "Crop Recommendation Engine: Multi-parameter soil analysis (N, P, K, pH, rainfall, temperature) to suggest optimal crops.",
      "Crop Yield Prediction: Regression modeling to estimate crop output per acre based on seasonal and environmental factors.",
      "Soil Health & Fertilizer Guidance: Diagnostic recommendations matching deficiency profiles with precise nutrient remedies.",
      "Mandi Market Price Information: Real-time agricultural commodity price tracking for informed harvest sales.",
      "Localized Weather Advisory: Short-term weather alerts for irrigation and spraying schedules.",
      "Multilingual Voice Assistant: Voice query capabilities designed for accessible regional language interactions."
    ],

    techStack: [
      "React.js",
      "Python",
      "FastAPI",
      "EfficientNet-B0",
      "Random Forest",
      "Machine Learning",
      "Tailwind CSS"
    ],

    architecture: {
      frontend: "React.js interactive dashboard with diagnostic image upload and audio query interface.",
      backend: "FastAPI asynchronous microservice serving model endpoints with fast inference.",
      mlPipeline: "EfficientNet-B0 CNN for vision classification and Random Forest for agronomic tabular data.",
      deployment: "Containerized Python API with modular ML model weight caching."
    },

    highlights: [
      { label: "Vision Model", val: "EfficientNet-B0" },
      { label: "Agronomic ML", val: "Random Forest" },
      { label: "API Framework", val: "FastAPI Async" },
      { label: "Voice Support", val: "Multilingual" }
    ]
  },
  {
    id: "breast-cancer-prediction",
    name: "Breast Cancer Diagnostic Prediction",
    category: "Healthcare",
    secondaryCategories: ["Healthcare", "AI & Machine Learning", "Academic Projects"],
    badge: "Academic / Collaborative Project",
    isFeatured: false,
    github: "https://github.com/dipaliparkhede/breast-cancer-prediction",
    liveDemo: null,
    gradient: "from-pink-600 to-rose-700",
    accentColor: "#F43F5E",
    tagline: "Machine learning diagnostic classification using cell nucleus morphometric features",
    description: "A machine learning-based healthcare project focused on breast cancer prediction using data preprocessing, model development, and prediction analysis.",
    overview: "Developed as an academic research project focused on medical data science, this project processes fine-needle aspirate (FNA) digitized breast mass cell features. It rigorously analyzes feature correlation, cleans outliers, and trains multiple supervised classification algorithms to assist clinical diagnostic classification.",

    keyFeatures: [
      "Exploratory Data Analysis: Deep statistical distribution study across 30+ nuclear morphometric attributes (radius, texture, concavity).",
      "Feature Correlation & Selection: Heatmap and variance thresholding to eliminate multicollinear predictor features.",
      "Standardized Data Preprocessing: Imputation, Standard Scaler transformation, and train-test stratification.",
      "Multi-Model Benchmark: Comparative training across Logistic Regression, Support Vector Classifier (SVC), and Random Forest.",
      "Clinical Metric Evaluation: Thorough evaluation focusing on False Negative minimization using Recall, Precision, Confusion Matrix, and ROC-AUC curves."
    ],

    techStack: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook"
    ],

    architecture: {
      frontend: "Jupyter analytical notebooks and Python diagnostic inference script.",
      mlPipeline: "StandardScaler feature normalization pipeline coupled with Scikit-learn estimator tuning.",
      evaluation: "K-fold cross-validation, ROC-AUC curve plotting, and classification report generation."
    },

    highlights: [
      { label: "Domain", val: "Oncology ML" },
      { label: "Data Pipeline", val: "Scikit-learn" },
      { label: "Evaluation", val: "ROC-AUC & Matrix" },
      { label: "EDA", val: "Seaborn / Pandas" }
    ]
  },
  {
    id: "house-price-prediction",
    name: "House Price Valuation Engine",
    category: "Academic Projects",
    secondaryCategories: ["Academic Projects", "AI & Machine Learning"],
    badge: "Academic / Collaborative Project",
    isFeatured: false,
    github: "https://github.com/dipaliparkhede/house_price_prediction",
    liveDemo: null,
    gradient: "from-cyan-600 to-blue-700",
    accentColor: "#0EA5E9",
    tagline: "Multivariate regression model for real estate price valuation based on structural & locality parameters",
    description: "A machine learning project that predicts property prices based on location, area, and other property-related features.",
    overview: "This project implements end-to-end regression techniques on real estate housing records. It incorporates exploratory data cleaning, categorical dimensional reduction, outlier removal based on price-per-square-foot ratios, and model optimization using Random Forest Regression to deliver accurate valuation predictions.",

    keyFeatures: [
      "Real Estate Data Cleaning: Handling null attributes, formatting bedroom strings, and parsing composite square-footage entries.",
      "Outlier Treatment: Statistical standard deviation thresholding to filter erroneous pricing and size outliers.",
      "Dimensionality Reduction: Categorical aggregation of sparse location records to streamline high-cardinality one-hot encodings.",
      "Random Forest Regression: Training an ensemble of decision trees to capture non-linear market pricing dependencies.",
      "Model Evaluation: Measuring Mean Absolute Error (MAE), Root Mean Squared Error (RMSE), and R² score benchmarks."
    ],

    techStack: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Scikit-learn",
      "Random Forest Regression"
    ],

    architecture: {
      frontend: "Python analysis scripts and evaluation charts.",
      pipeline: "Custom data transformation pipeline: cleaning → feature engineering → one-hot encoding → regression fit.",
      evaluation: "Train/test validation with residual plots and R² score metrics."
    },

    highlights: [
      { label: "Algorithm", val: "Random Forest Regressor" },
      { label: "Feature Prep", val: "Outlier & Encoding" },
      { label: "Framework", val: "Scikit-learn" },
      { label: "Analysis", val: "NumPy & Pandas" }
    ]
  }
];
