import axios from "axios";
export default async function Home() {

  const res = await axios.get("http://localhost:3000/api/test");

  


  return (
    <>
      <div>hello world</div>
      <div>{JSON.stringify(res.data.response.url)}</div>

      <a href={res.data.response.url}>{res.data.response.url}</a>

      
      
    </>
  );
}
