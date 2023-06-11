import { useEffect, useState } from "react";

import banner from "./assets/image.jpg";
import FloatingInput from "./FloatingInput";
import Dropdown from "./Dropdown";
import data from "./encoding";
import korLabel from "./korlabel";

const URL = "http://127.0.0.1:8000";

// 사고여부 피해금액 사망자부상자
const TABLE = {
  2: { 1: [1, 1, 2], 0: [1, 1, 2] },
  1: { 1: [1, 1, 2], 0: [0, 1, 2] },
  0: { 1: [0, 1, 1], 0: [0, 0, 1] },
};

function App() {
  const [catValues, setCatValues] = useState({
    process_type: "",
    process_type2: "",
    orderer: "",
    bid_percent: "",
    process: "",
    place: "",
    total_price: "",
    process_price: "",
    process_percent: "",
    man_count: "",
    safety_plan: "",
    part: "",
    timezone: "",
    incident_object2: "",
  });
  const [linValues, setlinValues] = useState({
    process_day: "",
    total_day: "",
    temperature: "",
    humidity: "",
  });
  const [checkValues, setCheckValues] = useState({
    protection: false,
    personal_safety: false,
  });
  const [defedValues, setDefedValues] = useState({});

  const [isFetched, setIsFetched] = useState(false);
  const [dangerLevel, setDangerLevel] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFetched(false);

    const lin = {};
    for (const l in linValues) {
      lin[l] = Number(linValues[l]);
    }

    const body = { ...catValues, ...lin, ...checkValues, ...defedValues };
    console.log(body);

    const res = await fetch(`${URL}/predict`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...catValues,
        ...lin,
        ...checkValues,
        ...defedValues,
      }),
    });
    if (res.ok) {
      const jsonBody = await res.json();
      console.log(jsonBody);
      const { prob, wounded, damage } = jsonBody;
      setDangerLevel(TABLE[prob][damage][wounded]);
      setIsFetched(true);
    }
  };

  const [date, setDate] = useState({ today: "", day: "", season: "" });

  useEffect(() => {
    const today = new Date();
    const todayStr = today.toLocaleDateString("ko-KR", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    const day = today.toLocaleDateString("ko-KR", { weekday: "long" });
    const month = today.getMonth() + 1;
    if (month >= 3 && month <= 5) {
      setDate({ today: todayStr, day: day, season: "봄" });
      setDefedValues({ season: 2, day: data["day"][day] });
    } else if (month >= 6 && month <= 8) {
      setDate({ today: todayStr, day: day, season: "여름" });
      setDefedValues({ season: 3, day: data["day"][day] });
    } else if (month >= 9 && month <= 11) {
      setDate({ today: todayStr, day: day, season: "가을" });
      setDefedValues({ season: 4, day: data["day"][day] });
    } else {
      setDate({ today: todayStr, day: day, season: "겨울" });
      setDefedValues({ season: 1, day: data["day"][day] });
    }
  }, []);

  return (
    <div
      className={`flex flex-col transition-colors ease-in-out duration-600 ${
        isFetched
          ? dangerLevel === 0
            ? "bg-green-600"
            : dangerLevel === 1
            ? "bg-orange-400"
            : "bg-red-600"
          : "bg-white"
      }`}
    >
      <div className={`flex flex-col xl:mx-40 bg-white`}>
        <img src={banner} alt="banner" className="flex-basis self-center" />
        <div className="flex flex-col items-center h-full">
          <h1 className="text-3xl">건설현장 위험도 예측 시스템</h1>
          <div className="flex justify-evenly">
            <p className="mx-2">{date.today}</p>
            <p className="mx-2">{date.day}</p>
            <p className="mx-2">{date.season}</p>
          </div>
          {Object.entries(catValues)
            .reduce((resultArr, e, index) => {
              const chunkIndex = Math.floor(index / 3);
              if (resultArr.length === chunkIndex) {
                resultArr[chunkIndex] = [];
              }
              resultArr[chunkIndex].push(e[0]);
              return resultArr;
            }, [])
            .map((chunk) => (
              <div className="flex px-4 py-2 w-full justify-between">
                {chunk.map((e) => (
                  <Dropdown
                    label={e}
                    elements={data[e]}
                    formData={catValues}
                    setFormData={setCatValues}
                  />
                ))}
              </div>
            ))}
          <div className="flex px-4 py-2 w-full justify-between">
            {Object.entries(linValues).map((e) => (
              <FloatingInput
                label={e[0]}
                formData={linValues}
                setFormData={setlinValues}
              />
            ))}
          </div>
          <div className="flex m-3 w-full justify-evenly">
            {Object.entries(checkValues).map(([l, v]) => (
              <label>
                <input
                  type="checkbox"
                  checked={v}
                  onChange={() => setCheckValues({ ...checkValues, [l]: !v })}
                />
                {korLabel[l]}
              </label>
            ))}
          </div>
          <button
            onClick={handleSubmit}
            className="border-2 rounded border-blue-500 p-2 m-3 w-1/2"
          >
            예측
          </button>
        </div>
        <div
          className={`transition-opacity ease-in-out duration-600 text-center py-10 mt-5 text-6xl ${
            isFetched ? "opacity-100" : "opacity-0"
          } ${
            dangerLevel === 0
              ? "text-green-600"
              : dangerLevel === 1
              ? "text-orange-400"
              : "text-red-600"
          }`}
        >
          위험도 : {dangerLevel === 0 ? "하" : dangerLevel === 1 ? "중" : "상"}
        </div>
      </div>
    </div>
  );
}

export default App;

// {/* 이후 휴업이나 대처 등 */} 불가능 공종에 대한 정보를 나타내느게 아니라서
// '공종','낙찰률','발주자구분','계절','요일','평균온도','평균습도'

// process_type; 공종
// process_type2; 공종2
// bid_percent; 낙찰률
// orderer; 발주자구분
// season; 계절
// day; 요일
// temperature; 온도
// humidity; 습도
// protection; 안정방호
// process; 작업프로세스
// place; 장소
// total_price; 총공사비
// process_price; 해당공종공사비
// process_percent; 공정률
// man_count; 작업자수
// safety_plan; 안전관리계획
// total_day; 총공사일
// process_day; 공종공사일
// personal_safety; 개인보호
// part; 부위
// quarter; 분기
// timezone; 시간대
// incident_object2; 사고객체2

// 피해금액 유 무
// 사망부상자 없음 부상자있음 사망자있음
// 사고여부 상 중 하
