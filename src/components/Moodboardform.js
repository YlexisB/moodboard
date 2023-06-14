import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Moodboardform = ({
  handleFormExitClick,
  setSelectedImageSrc,
  selectedImageSrc,
  selectedImageUrl,
}) => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState([{ id: 0, value: "", editable: false }]);
  const [selectedInput, setSelectedInput] = useState(null);

  const handleTitleChange = (event, inputId) => {
    const inputValue = event.target.value;
    const updatedInputs = inputs.map((input) =>
      input.id === inputId ? { ...input, value: inputValue } : input
    );
    setInputs(updatedInputs);
  };
  const handleInputChange = (inputId) => {
    const selectedInputObject = inputs.find((input) => input.id === inputId);
    setSelectedInput(selectedInputObject);
  };

  const handleSaveClick = (event) => {
    event.preventDefault();

    if (!selectedInput) {
      console.log("No moodboard selected.");
      return;
    }

    if (selectedImageSrc) {
      const selectedImage = selectedImageSrc;
      console.log("Selected Image:", selectedImage);

      const savedImages = JSON.parse(localStorage.getItem("images")) || [];
      const savedInputs = JSON.parse(localStorage.getItem("inputs")) || [];

      const nonEmptyInputs = inputs.filter(
        (input) => input.value.trim() !== ""
      );
      console.log("Non-empty Inputs:", nonEmptyInputs);

      if (nonEmptyInputs.length > 0) {
        const title = nonEmptyInputs[nonEmptyInputs.length - 1].value;
        console.log("Title:", title);

        //  the existing input based on the selected moodboard
        const existingInput = savedInputs.find(
          (input) => input.value === selectedInput.value
        );
        console.log("Existing Input:", existingInput);

        const newImage = { id: uuidv4(), src: selectedImage, alt: "" };

        if (existingInput) {
          const existingBoardId = existingInput.id;
          const existingImages = savedImages.find(
            (image) => image.id === existingBoardId
          );

          if (existingImages) {
            const updatedImages = savedImages.map((image) => {
              if (image.id === existingBoardId) {
                return {
                  ...image,
                  images: [
                    ...image.images,
                    { ...newImage, boardId: existingBoardId },
                  ],
                };
              } else {
                return image;
              }
            });
            console.log("Updated Images:", updatedImages);

            localStorage.setItem("images", JSON.stringify(updatedImages));
          } else {
            const newImages = {
              id: existingBoardId,
              title: existingInput.value,
              images: [{ ...newImage, boardId: existingBoardId }],
            };

            localStorage.setItem(
              "images",
              JSON.stringify([...savedImages, newImages])
            );
          }
        } else {
          const newBoardId = uuidv4();
          const newInput = { id: newBoardId, value: title, editable: false };

          setInputs((prevInputs) => [...prevInputs, newInput]);

          localStorage.setItem(
            "inputs",
            JSON.stringify([...savedInputs, newInput])
          );
          localStorage.setItem(
            "images",
            JSON.stringify([
              ...savedImages,
              {
                id: newBoardId,
                title: newInput.value,
                images: [newImage],
              },
            ])
          );
        }
      }
    } else {
      console.log("No image selected.");
    }

    // Remove empty inputs from state and local storage
    const nonEmptyInputs = inputs.filter((input) => input.value.trim() !== "");

    setInputs(nonEmptyInputs);
    localStorage.setItem("inputs", JSON.stringify(nonEmptyInputs));

    navigate("/personalboard");
  };

  const handleNewBoardClick = (event) => {
    event.preventDefault();
    const newId = inputs.length;
    const newInput = { id: newId, value: "", editable: true };
    setInputs((prevInputs) => [
      ...prevInputs.map((input) => ({ ...input, editable: false })),
      newInput,
    ]);
  };

  useEffect(() => {
    const storedInputs = JSON.parse(localStorage.getItem("inputs")) || [];
    const updatedInputs = storedInputs.map((input) => {
      return { ...input, editable: false };
    });
    setInputs(updatedInputs);
  }, []);

  useEffect(() => {
    const nonEmptyInputs = inputs.filter((input) => input.value.trim() !== "");
    localStorage.setItem("inputs", JSON.stringify(nonEmptyInputs));
  }, [inputs]);

  useEffect(() => {
    if (selectedImageUrl) {
      setSelectedImageSrc(selectedImageUrl);
    }
  }, [selectedImageUrl, setSelectedImageSrc]);

  const inputElements = inputs.map((input) => (
    <div key={input.id}>
      <input
        type="text"
        placeholder="Title"
        value={input.value}
        onChange={(event) => handleTitleChange(event, input.id)}
        readOnly={!input.editable}
        onClick={() => handleInputChange(input.id)}
      />
    </div>
  ));

  return (
    <div id="mood-form">
      <button id="exit-button" onClick={handleFormExitClick}>
        x
      </button>
      <div id="mood-form-container">
        <form>
          <h1>Add To Moodboard</h1>
          {inputElements}
          <div className="board-form-buttons">
            <button onClick={handleNewBoardClick} id="new-board-button">
              <i className="fa-solid fa-square-plus"></i> New Moodboard
            </button>
            <button
              id="save-board-button"
              type="submit"
              onClick={handleSaveClick}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Moodboardform;
