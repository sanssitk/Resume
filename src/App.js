import React from "react";
import "./App.css";
import TopNav from "./TopNav";
import Accordion from "./Accordion";
import { products } from "./Data";
import Footer from "./Footer";

function App({}) {
  const abcd = React.createElement("h1", null, "what's happening");
  return (
    <div className="app__wrapper">
    {abcd}
      <TopNav />
      <div className="app">
        {products.map((product) => (
          <Accordion
            // Case 1.  If same prop titles
            // {...product}

            // Case 2. If props are different props title
            key={product.id}
            header={product.header}
            body={product.body}
            icon={product.icon}
            hl={product.hl}
            // title={product.title}
            // image={product.image}
          />
        ))}
        <Footer />
      </div>
    </div>
  );
}

export default App;
