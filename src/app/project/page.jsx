import Card from "@/components/Card";
import Image from "next/image";

export default function DynamicPage() {
  // Sample array to repeat component
  const cardData = [
    { title: "Bone-Fracture-Detection", content: "TA deep learning-based solution for detecting bone fractures from X-ray images. It utilizes CNN architectures like ResNet50 to classify bone types and identify fractures efficiently. The model is trained on 20,000 X-ray images and employs a two-step classification process for accurate diagnosis, aiding medical professionals in improving patient care",image:"/img/BILY3.png" },
    { title: "Indian Tourism: A Data-Driven Insightful Analysis", content: "A data-driven exploration of India’s tourism sector using Python (Pandas) for data preprocessing and Power BI for interactive visualizations. The project highlights trends in international tourist flows using Arima modelling, top states, and seasonal patterns. Ideal for showcasing data storytelling, dashboarding, and real-world EDA." ,image:"/img/about-india-tourism.png"},
    { title: "Baby-Posture-Monitoring-System", content: "The Baby Posture Monitoring System uses computer vision to monitor an infant's sleeping posture in real-time, detecting unsafe positions and alerting caregivers to enhance safety and prevent sleep-related risks.",image:"/img/left side.jpeg" },
    { title: "Real-Time Driver Distraction Detection", content: "This project classifies distracted driving behaviors using a fine-tuned MobileNetV3 model trained on the State Farm dataset. Real-time frames from an ESP32-CAM are sent to a Raspberry Pi for classification into multiple distraction types like texting, drinking, or using a phone. Unsafe actions trigger buzzer alerts to enhance driving safety." ,image:"/img/driwdri.jpeg"},
    {title: "VocalTranscriber", content: "YouTube Transcriber and Word Cloud Generator: A Python tool integrated with Excel to download YouTube audio, transcribe it using AssemblyAI, and generate word clouds. Control everything via an Excel macro button, with real-time updates and outputs directly in the spreadsheet. Simple, fast, and efficient!",image:"/img/transcriber.png"},
    {title: "StockSama Financial Recommender", content: "This app is an AI-powered chatbot that extracts financial insights from PDFs and generates reports using prompt templates via LangChain. It integrates Yahoo Finance APIs to fetch real-time data for NIFTY50 stocks and predicts trends for the next 15 days. Built using LLMs with RAG architecture and deployed via ngrok and expo for seamless user interaction.", image:"/img/stock.png"}
  ];

  //Logos
  const techLogos = [
    { src: "/img/logos/js.png", alt: "JavaScript" },
    { src: "/img/logos/nodejs.png", alt: "Node.js" },
    { src: "/img/logos/cpp.png", alt: "C++" },
    { src: "/img/logos/python.png", alt: "Python" },
    { src: "/img/logos/reactjs.png", alt: "React" },
    { src: "/img/logos/gcloud.png", alt: "Google Cloud" },
    { src: "/img/logos/tf.png", alt: "TensorFlow" },
    { src: "/img/logos/mysql.png", alt: "MySQL" },
  ];
  const logosLoop = [...techLogos, ...techLogos,...techLogos, ...techLogos, ...techLogos, ...techLogos];


  
  return (
    <div className="pl-16 mt-10 text-justify">
      <h1 className="text-5xl font-bold mb-4 pl-16 text-textcolor">Our Projects</h1>
      <h2 className="text-2xl font-medium pl-16">Have a look at the successful projects for our clients! </h2>
      <div className="grid grid-cols-3 sm:grid-cols-1 cols- md:grid-cols-3 lg:grid-cols-3 gap-8 pl-16 mt-4 -mr-5 gap-x-0 ">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} image={card.image}/>
        ))}
      </div>
      <div className="mt-12 border-t pt-8">
        <h2 className="text-lg font-semibold mb-4">Technologies We Use</h2>
      <div className="relative w-full overflow-hidden whitespace-nowrap">
        <div className="flex min-w-max animate-marquee-reverse">
            {logosLoop.map((logo, idx) => (
              <div
                key={idx}
                className="inline-flex items-center justify-center mx-4"
                style={{ width: "100px", height: "100px" }}
              >
               <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={80}
                  height={80}
                  className="object-contain"
                />
      </div>
      ))}
      </div>
      </div>
      </div>
    </div>
  );
}