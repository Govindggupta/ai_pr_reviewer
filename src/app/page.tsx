import axios from "axios";
export default async function Home() {

  const res = await axios.get("http://localhost:3000/api/test");

  


  return (
    <>
      <div>hello world</div>
      <div>{JSON.stringify(res.data.response.url)}</div>

      <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium illum quam eum aut optio impedit quibusdam asperiores, explicabo dolore veniam voluptatem recusandae neque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsum eos laborum, quae, dolores distinctio fuga voluptatibus eius maiores sunt necessitatibus <span><a href="https://github.com/TuringLang/MCMCChains.jl/pull/316/commits" className="text-blue-600">#233</a></span>exercitationem atque qui doloremque consequatur quam ullam fugiat minima ex commodi beatae facere harum dolorem odit? Laboriosam asperiores maxime quasi hic aut dolore reiciendis?</div>

      
      
    </>
  );
}
