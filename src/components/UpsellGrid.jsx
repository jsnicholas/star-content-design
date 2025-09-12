import grid1 from "../assets/desktop/grid-1.jpeg";
import grid2 from "../assets/desktop/grid-2.jpeg";
import grid3 from "../assets/desktop/grid-3.jpeg";
import grid4 from "../assets/desktop/grid-4.jpeg";


function UpsellGrid() {
  return (
    <>
      {/* First upsell row */}
      <section className="grid grid-cols-1 md:grid-cols-2" id="services">
        <div className="aspect-square content-center justify-center align-center p-8 md:p-24">
          <p className="text-dark font-serif text-4xl mb-6">
            Welcome to the Creator Space.
          </p>
          <p className="text-dark font-sans mb-8">
            At Star Content Design, we specialize in helping new content creators establish their online identity. 
            We'll work with you to define your brand, build and manage your website and link aggregator services and provide branding materials for social media.
          </p>
          <a className="uppercase text-sm font-serif font-bold" href="#contact">
            Let's work together.
          </a>
        </div>
        <div
          className="aspect-square bg-center bg-cover"
          style={{ backgroundImage: `url(${grid1})` }}
        />
        {/* second upsell row */}
        <div
          className="aspect-square bg-center bg-cover"
          style={{ backgroundImage: `url(${grid2})` }}
        ></div>
        <div className="aspect-square content-center justify-center align-center p-8 md:p-24">
          <p className="text-dark font-serif text-4xl capitalize mb-6">
           By content creators, for content creators.
          </p>
          <p className="text-dark font-sans mb-8">
            We've worked in the industry, and we know what it takes to stand out. We use our experience to help direct the design process and provide sites that get your visitors to your content quickly.
          </p>
          <a className="uppercase text-sm font-serif font-bold" href="/">
            We've got your back.
          </a>
        </div>
        {/* graphic design upsell */}
        <div
          className="aspect-square bg-center bg-cover"
          style={{ backgroundImage: `url(${grid3})` }}
        >
          <div className="h-1/3"></div>
          <div className="h-1/4 lg:h-1/3"></div>
          <div className="text-center h-1/3" style={{ color: "#ACC4CF" }}>
            <p className="font-serif text-4xl capitalize mb-4">
              Competitive Rates
            </p>
            <p className="px-12">
              Building your online persona can be expensive. We've been there. That's why we offer competitive rates to help you get established without breaking the bank.
            </p>
          </div>
        </div>
        {/* Photography upsell */}
        <div
          className="aspect-square bg-center bg-cover"
          style={{ backgroundImage: `url(${grid4})` }}
        >
          <div className="h-1/3"></div>
          <div className="h-1/4 lg:h-1/3"></div>
          <div className="text-center h-1/3" style={{ color: "#144156" }}>
            <p className="font-serif text-4xl capitalize mb-4">Size Matters</p>
            <p className="px-12">
              Our compact sites are built to load quickly, so that your users don't have to wait to get to the content they want. 
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default UpsellGrid;
