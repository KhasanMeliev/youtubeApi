import React, { useState } from "react";
import { Button, Input, SearchBox, Wrapper } from "./Youtube.style";

const Youtube = () => {
  const [name, setName] = useState("");
  const [datas, setDatas] = useState();

  let videoID = name.slice(-11);

  const searchVideo = () => {
    if (name.length <= 0) {
      return alert("please fill the blank");
    }
    fetch(`https://youtube-lookup.vercel.app/api/video/${videoID}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDatas(<h1>{data.snippet.title} video by {data.snippet.channelTitle}</h1>);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Wrapper>
      <SearchBox>
        <Input
          type="text"
          placeholder="Video Link..."
          autoComplete="off"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Button onClick={() => searchVideo()}>Search</Button>
      </SearchBox>
      {datas}
    </Wrapper>
  );
};

export default Youtube;
