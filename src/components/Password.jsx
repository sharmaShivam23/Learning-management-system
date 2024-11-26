
import { useState, useCallback, useEffect } from "react";
import img from '../Images/img.png'
import { useNavigate } from "react-router-dom";

function Password() {
  let navigate = useNavigate()
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");


  function handleBack(){
     navigate("/Signup")
  }

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "@#$%&";
    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
 
  return (
    <>
     <img src={img} className="h-20" onClick={handleBack} alt="" />
      <div className="max-w-md mx-auto shadow-lg rounded-lg px-6 py-6 mt-10 bg-red-950 text-white">
        <h1 className="text-center mb-5 text-3xl font-extrabold text-orange-500">
          Password Generator
        </h1>

        {/* Password Display */}
        <div className="flex shadow-md rounded-lg overflow-hidden mb-4 w-full">
          <input
            type="text"
            value={password}
            className="outline-none w-full px-4 py-2 bg-red-900 shadow-lg shadow-red-900 text-orange-300 text-sm"
            placeholder="Password"
            readOnly
          />
          <button
            className="px-4 bg-amber-600 hover:bg-red-950 text-white text-sm font-semibold active:bg-amber-600 transition-all ease-in-out delay-0 duration-300 active:text-black active:font-bold"
            onClick={() => navigator.clipboard.writeText(password)}
          >
            Copy
          </button>
        </div>

        {/* Length Slider */}
        <div className="flex items-center gap-2 mb-4">
          <label className="text-sm font-medium">Length:</label>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="flex-grow"
            onChange={(e) => setLength(e.target.value)}
          />
          <span className="text-sm font-semibold text-orange-300">{length}</span>
        </div>

        {/* Options */}
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="cursor-pointer"
            />
            <label htmlFor="numberInput" className="text-sm">
              Include Numbers
            </label>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              checked={charAllowed}
              id="characterInput"
              onChange={() => setCharAllowed((prev) => !prev)}
              className="cursor-pointer"
            />
            <label htmlFor="characterInput" className="text-sm">
              Include Special Characters
            </label>
          </div>
        </div>

        {/* Generate Button */}
        <div className="text-center">
          <button
            onClick={passwordGenerator}
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md font-bold"
          >
            Generate Password
          </button>
        </div>
      </div>
    </>
  );
}

export default Password;
