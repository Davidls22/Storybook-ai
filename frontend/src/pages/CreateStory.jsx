import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import preview from "../assets/preview.png";
import { getRandomPrompt } from "../utils";
import { FormField, Loader } from "../components";

const CreateStory = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
  });
  const [generatingText, setGeneratingText] = useState(false);
  const [loading, setLoading] = useState(false);
  const [generatedText, setGeneratedText] = useState("");

  const generateText = async () => {
    if (form.prompt) {
      try {
        setGeneratingText(true);
        const response = await fetch("https://storybook-ai.onrender.com/api/v1/ai/generate-text", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: form.prompt,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setGeneratedText(data.text); // Update state with generated text
      } catch (err) {
        console.error("Error generating text:", err);
        alert("Unable to generate text. Please try again.");
      } finally {
        setGeneratingText(false);
      }
    } else {
      alert("Please provide a prompt");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (form.prompt && generatedText) {
      setLoading(true);
      try {
        const response = await fetch("https://storybook-ai.onrender.com/api/v1/post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...form, generatedText }), // Include generatedText in the body
        });
  
        if (!response.ok) {
          throw new Error("Failed to create post");
        }
  
        const data = await response.json();
        alert("Post created successfully");
        navigate("/");
      } catch (err) {
        console.error("Failed to create post:", err);
        alert("Failed to create post. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please generate text with proper details");
    }
  };
  

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSurprise = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          Create Story
        </h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
          Create your story with StoryTime-AI
        </p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your name"
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="Write a story about a time-traveling detective solving a mystery in the Victorian era."
            value={form.prompt}
            handleChange={handleChange}
            isSurprise
            handleSurprise={handleSurprise}
          />
        </div>

        <div className="mt-5">
          <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3 h-64">
            {generatingText ? (
              <div className="flex justify-center items-center h-full">
                <Loader />
              </div>
            ) : (
              <div className="h-full overflow-y-auto">
                <p className="text-base">{generatedText}</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={generateText}
            className="text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {generatingText ? "Generating..." : "Generate"}
          </button>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {loading ? "Sharing..." : "Share with the Community"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreateStory;
