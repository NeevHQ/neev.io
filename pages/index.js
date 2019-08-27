import "./main.css";

const App = () => (
  <>
    <header class="container mx-auto text-center">
      <h1 class="text-6xl font-display font-black">Neev</h1>
    </header>
    <section class="container mx-auto mx-2 my-4 px-2 flex flex-col justify-center">
      <h3 class="font-extrabold text-2xl lg:text-4xl py-4 text-center uppercase">
        Our Products Makes Businesses Productive
      </h3>
      <p class="text-xl md:text-2xl text-center">
        We are focused on building products which solve important problems to
        help organisations improve their productivity. We take care of all the
        technology related requirements so you can focus on your core business.
      </p>
      <img
        class="w-56 md:w-1/3 mx-auto mt-4 mb-4"
        src="/static/assets/solution_mindset.svg"
      />
    </section>
    <div class="bg-blue-100">
      <section class="container mx-auto mx-2 my-4 px-2 flex flex-col justify-center">
        <h3 class="font-extrabold text-2xl lg:text-4xl py-4 text-center uppercase">
          Trusted By
        </h3>
        <div class="flex flex-wrap items-center justify-center py-4">
          <img
            class="w-48 m-4 lg:mx-4 object-contain	"
            src="/static/assets/inega.png"
            alt="Inega"
            title="Inega"
          />
          <img
            class="w-48 h-auto m-4 lg:mx-4 object-contain	"
            src="/static/assets/cf-logo.svg"
            alt="Cure.fit"
            title="Cure.fit"
          />
          <img
            class="w-48 m-4 lg:mx-4 object-contain	"
            src="/static/assets/times_talent.png"
            alt="Times Talent (Times Group)"
            title="Times Talent (Times Group)"
          />
          <img
            class="w-48 m-4 lg:mx-4 object-contain	"
            src="/static/assets/theagencysrilanka.png"
            alt="The Agency Srilank"
            title="The Agency Srilank"
          />
          <img
            class="w-20 m-4 lg:mx-4 object-contain	"
            src="/static/assets/yelobank.svg"
            alt="Yelo Bank"
            title="Yelo Bank"
          />
        </div>
      </section>
    </div>
    <section class="my-2 py-2">
      <h3 class="font-extrabold text-xl lg:text-4xl py-4 text-center">
        Reach out to us at{" "}
        <span class="border-b-4 border-blue-400">hello@neev.io</span>
      </h3>
    </section>
    <footer class="container mx-auto text-center my-10 py-2">
      <p class="text-sm">
        &copy; 2019 Copyright Neev Labs. All rights reserved.
      </p>
    </footer>
  </>
);

export default App;
