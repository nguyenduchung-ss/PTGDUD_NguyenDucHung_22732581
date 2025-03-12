// import './Footer.css'; 

export default function Footer() {
  return (
    <div className="">
      <div className="flex  bg-black text-white">
        <div className="">
          <div>
            <h5 className="">About Us</h5>
            <div className="">
              Welcome to our website, a wonderful place to explore and learn
              how to cook like a pro.
            </div>
            <br />
            <input className="bg-white "
              type="text" 
            />
            <button className="bg-pink-500 rounded-xl">Send</button>
          </div>
          <div>
            <div className="footer-brand">
              <span className="brand-name">Chefify</span>
              <span className="footer-info">2023 Chefify Company</span>
              <span className="privacy-links">Terms of Service | Privacy Policy</span>
            </div>
          </div>
        </div>
        <div className="middle-column">
          <div>
            <div className="section-title">Learn More</div>
            <div className="item">Our Cooks</div>
            <div className="item">See Our Features</div>
            <div className="item">FAQ</div>
          </div>
          <div>
            <div className="section-title">Shop</div>
            <div className="item">Gift Subscription</div>
            <div className="item">Send Us Feedback</div>
          </div>
        </div>
        <div className="right-column">
          <div className="section-title">Recipes</div>
          <div className="item">What to Cook this Week</div>
          <div className="item">Pasta</div>
          <div className="item">Dinner</div>
          <div className="item">Healthy</div>
          <div className="item">Vegetarian</div>
          <div className="item">Vegan</div>
          <div className="item">Christmas</div>
        </div>
      </div>
    </div>
  );
}
