import quiz from "./Quiz";
import { useState } from "react";

function Home() {
  let [Qindex, setQindex] = useState(0);

  function onSubmit() {
    setQindex(Qindex++);
  }

  function onPrevious(){
    setQindex(Qindex--);
  }

  function onReset(){
      setQindex(0)
  }

  return (
    <div>
      <div>
        <div className="card bg-black">
          <div className="card-body">
            <h2 id="questionh2" className="card-title">
              {quiz[Qindex].question}
              {console.log(Qindex)}
            </h2>
            <ol type="A" className="option-list">
              <li className="card-text">
                <input
                  type="radio"
                  className="option"
                  name="option"
                  id="optionA"
                />
                <label id="a_text" htmlFor="a" className="option-text">
                  {quiz[Qindex].optionA}
                </label>
              </li>
              <li className="card-text">
                <input
                  type="radio"
                  className="option"
                  name="option"
                  id="optionB"
                />
                <label id="b_text" htmlFor="b" className="option-text">
                  {quiz[Qindex].optionB}
                </label>
              </li>
              <li className="card-text">
                <input
                  type="radio"
                  className="option"
                  name="option"
                  id="optionC"
                />
                <label id="c_text" htmlFor="c" className="option-text">
                  {quiz[Qindex].optionC}
                </label>
              </li>
              <li className="card-text">
                <input
                  type="radio"
                  className="option"
                  name="option"
                  id="optionD"
                />
                <label id="d_text" htmlFor="d" className="option-text">
                  {quiz[Qindex].optionD}
                </label>
              </li>
            </ol>
            <button className="btn btn-success" id="submit" onClick={onSubmit}>
              Submit
            </button>
            <button className={Qindex>0 ? "btn btn-warning" : "btn btn-warning disabled"} id="previous" onClick={onPrevious}>
              Previous
            </button>
            <button className={Qindex>0 ? "btn btn-danger" : "btn btn-danger disabled"} id="reset" onClick={onReset}>
              Reset
            </button>
            <button className="btn btn-danger" id="clear">
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
