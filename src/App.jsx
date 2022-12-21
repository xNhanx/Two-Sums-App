import { useEffect, useState } from "react";
import "./App.css";
import Grid from "./Components/Grid";
import Loading from "./Components/Loading";
import Numbers from "./Components/Numbers";
import Button from "./Components/Button";
import Target from "./Components/Target";

const targetFinder = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let k = 0; k < nums.length; k++) {
      if (nums[i] + nums[k] === target && i !== k) {
        return [i, k];
      }
    }
  }
  return [];
};

function App() {
  const [data, setData] = useState({});

  const fetchData = () => {
    fetch("https://nhan.vladk.dev/api/assignments/two-sums")
      .then((res) => {
        if (res.ok) {
          console.log("SUCCESS");
          return res.json();
        } else {
          console.log("UNSUCCESSFUL");
        }
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (data.nums === undefined) {
    return (
      <div>
        <Loading />
      </div>
    );
  } else {
    console.log(data);
    console.log(data.nums);
  }
  let solution = targetFinder(data.nums, data.target);
  console.log(solution);

  const refreshApp = () => {
    setData({});
    fetchData();
  };

  return (
    <div className="App">
      <h1 className="header-text">Two Sums Application</h1>
      <div className="flex-container">
        <div className="content-container">
          <Target target={data.target} />
          <Grid>
            {data.nums.map((number, index) => {
              return (
                <Numbers
                  key={index}
                  number={number}
                  solution={solution}
                  index={index}
                />
              );
            })}
          </Grid>
          <div className="button-parent">
            <Button refresh={refreshApp} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
