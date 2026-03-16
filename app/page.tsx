'use client';

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white min-h-screen px-6 md:px-20 pt-28">

        {/* HERO */}
        <section className="min-h-[70vh] flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Spandana Potti
          </h1>

          <p className="mt-6 max-w-3xl text-xl md:text-2xl text-gray-400">
            AI/ML Engineer skilled in deep learning, NLP, Agentic AI, and cloud-based AI solutions, building
            scalable data pipelines, multi-agent frameworks, and production-grade ML systems.
          </p>
        </section>

        {/* ABOUT */}
        <section className="py-24 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 tracking-tight">
            About
          </h2>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            I specialize in designing and deploying intelligent systems that combine
            large language models, agent orchestration frameworks, and cloud-native infrastructure.
            <br /><br />
            My experience spans agentic AI, deep learning, real-time data pipelines,
            and end-to-end ML systems deployed at scale.
            <br /><br />
            I focus on building AI that is reliable, measurable, and production-ready.
          </p>
        </section>

        {/* IMPACT */}
        <section className="py-20 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <Stat value="75%" label="Multi-agent success" />
            <Stat value="60%" label="Workflow automation" />
            <Stat value="80%" label="Effort reduction" />
            <Stat value="1M+" label="Events processed" />
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-28 max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">
            Professional Experience
          </h2>

          <div className="space-y-10">
            <ExperienceCard
              role="AI Engineer"
              company="HCL America"
              period="Sep 2025 – Present"
              points={[
                "Designed and deployed LangGraph-based multi-agent AI workflows across security, QA, finance, and manufacturing analytics, reducing manual effort by 50%",
                "Developed an LLM-powered defect intelligence system using vector embeddings (NVIDIA) and clustering, reducing redundant QA validation by 30–40%",
                "Built AI-driven security remediation pipelines integrating AppScan, GitHub, and CI/CD workflows to automate vulnerability detection, code generation, and PR creation, accelerating resolution by 40%",
                "Engineered AI-assisted developer productivity automation integrating Jira, GitHub, and LLM-based code generation for end-to-end ticket parsing, code fixes, and issue resolution",
                "Implemented AI-based anomaly detection pipelines for financial invoices, enabling automated fraud detection and reducing manual review by 30%",
                "Built time-series demand forecasting pipelines using NeuralProphet, Pandas, and NumPy, processing enterprise sales data with scenario-based forecasts",
              ]}
            />

            <ExperienceCard
              role="Data Scientist Intern"
              company="Eon Collective"
              period="May 2024 – Aug 2024"
              points={[
                "Led Deltek to MS Teams Connector project to automate data exchange via API calls, reducing manual tasks by 60% and saving 20+ hours weekly",
                "Implemented Python-based ChatBots using LLMs in AWS Bedrock (Llama3, Mistral) and SnowConvert for Oracle-to-Snowflake SQL conversion, cutting manual effort by 80% and improving accuracy by 30%",
                "Built RAG system using FAISS, Javascript, and AWS Bedrock Titan for document-based QA, including query rewriting, source attribution, and React frontend, deployed via AWS ECS",
              ]}
            />

            <ExperienceCard
              role="ML Engineer Intern"
              company="Coincent"
              period="Jun 2022 – Nov 2022"
              points={[
                "Developed CNN-based image classification pipeline using TensorFlow/Keras, processing 80K+ images with data augmentation and hyperparameter tuning",
                "Built React dashboard for real-time image upload and prediction visualization, integrated CI/CD pipelines for automatic model updates",
              ]}
            />
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-28 max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Multi-agent Collaboration for Software Development"
              description="Built a multi-agent framework using LangGraph with 5 AI agents following MCP and A2A patterns. Achieved 75% generation success and reduced manual overhead by 30%."
              tech={['LangGraph', 'LangChain', 'CrewAI', 'AWS', 'LoRA/QLoRA']}
              github="https://github.com/spandana730/portfolio/tree/main/multi-agent"
            />

            <ProjectCard
              title="BARTNet Ridership Forecasting"
              description="Developed deep learning framework (LSTM, Bi-LSTM, TCN, BERT) for ridership forecasting, improving RMSE from 6.14 to 2.10 and reducing MAPE by 58%."
              tech={['PyTorch', 'MLflow', 'BERT', 'LSTM', 'TCN']}
              github="https://github.com/spandana730/portfolio/tree/main/bartnet-ridership"
            />

            <ProjectCard
              title="Real-Time E-commerce Website Analysis"
              description="Built real-time pipeline for 1M+ user events using Kafka, Flink, Redis, and MongoDB. Deployed ML models for recommendations and visualized dashboards with Elasticsearch/Kibana."
              tech={['Kafka', 'Flink', 'Redis', 'MongoDB', 'Spark', 'AWS']}
              github="https://github.com/spandana730/portfolio/tree/main/real-time-ecom-pipeline"
            />
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-28 max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">
            Technical Systems
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <SkillCard
              icon="🧠"
              title="AI & Machine Learning"
              skills={['PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn', 'MLflow', 'Deep Learning', 'NLP']}
            />

            <SkillCard
              icon="🤖"
              title="GenAI & Agentic Systems"
              skills={['LangChain', 'LangGraph', 'CrewAI', 'RAG', 'HuggingFace', 'LoRA/QLoRA', 'Vector Embeddings', 'Prompt Engineering']}
            />

            <SkillCard
              icon="☁️"
              title="Cloud & Infrastructure"
              skills={['AWS (S3, Lambda, Bedrock, Step Functions, ECS, CloudWatch)', 'Docker', 'FastAPI', 'Flask', 'Node.js']}
            />

            <SkillCard
              icon="🗄️"
              title="Databases & Visualization"
              skills={['Snowflake', 'PostgreSQL', 'MySQL', 'MongoDB', 'Oracle', 'Tableau', 'Power BI', 'Kibana']}
            />
          </div>
        </section>

        {/* CONTACT */}
        <section className="py-28 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-12">
            Let’s build something impactful
          </h2>

          <div className="flex justify-center gap-8 text-gray-400 text-lg">
            <a href="mailto:spandanapotti30@gmail.com" className="hover:text-white">Email</a>
            <a href="https://linkedin.com/in/spandanapotti30" className="hover:text-white">LinkedIn</a>
            <a href="https://github.com/spandanapotti30" className="hover:text-white">GitHub</a>
          </div>
        </section>

      </main>
    </>
  );
}

/* ---------------- COMPONENTS ---------------- */

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-lg font-bold">Spandana Potti</span>
        <div className="flex gap-6 text-gray-400">
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a
            href="/Spandana Potti Resume.pdf"
            className="px-4 py-2 border border-gray-600 rounded-lg hover:border-white"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

function Stat({ value, label }: any) {
  return (
    <div className="hover:shadow-[0_0_25px_rgba(255,255,255,0.08)] transition">
      <p className="text-4xl font-bold">{value}</p>
      <p className="text-gray-400 mt-2">{label}</p>
    </div>
  );
}

function ExperienceCard({ role, company, period, points }: any) {
  return (
    <div className="border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition">
      <h3 className="text-2xl font-semibold">{role}</h3>
      <p className="text-gray-400">{company} • {period}</p>
      <ul className="mt-4 list-disc list-inside text-gray-400 space-y-2">
        {points.map((p: string, i: number) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  );
}

function ProjectCard({ title, description, tech, github }: any) {
  return (
    <div className="border border-gray-800 rounded-xl p-6 flex flex-col justify-between hover:border-gray-600 transition">
      <div>
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-gray-400 mt-2">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((t: string) => (
            <span
              key={t}
              className="text-xs px-2 py-1 border border-gray-700 rounded-full text-gray-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <a
        href={github}
        target="_blank"
        className="mt-6 px-4 py-2 bg-white text-black rounded-lg text-sm font-medium text-center"
      >
        View on GitHub
      </a>
    </div>
  );
}

function SkillCard({ icon, title, skills }: any) {
  return (
    <div className="border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition">
      <h3 className="text-3xl font-semibold mb-4">
        <span className="mr-2">{icon}</span>{title}
      </h3>
      <ul className="text-gray-400 space-y-2 text-lg">
        {skills.map((s: string) => <li key={s}>• {s}</li>)}
      </ul>
    </div>
  );
}