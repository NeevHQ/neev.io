import "./main.css";

const App = () => (
  <>
    <header class="container mx-auto text-center">
      <h1 class="text-6xl font-display font-black">Neev</h1>
    </header>
    <main class="container mx-auto mx-2 my-4 px-2">
      <section class="flex flex-col lg:flex-row">
        <img class="w-1/2 mx-auto" src="/static/assets/solution_mindset.svg" />
        <div class="flex flex-col justify-center">
          <h3 class="font-extrabold text-2xl lg:text-4xl py-4">
            Our Products Makes Businesses Productive
          </h3>
          <p class="text-xl">
            We are focused on building products which solves important problems
            to help organisations with their productivity. We take care of all
            the technology related requirements so you can focus on your core
            business.
          </p>
        </div>
      </section>

      <section class="my-2">
        <h3 class="font-extrabold text-2xl lg:text-4xl py-4 text-center">
          Trusted By
        </h3>
        <div class="flex flex-wrap lg:justify-center py-4">
          <img
            class="w-48 mx-4 object-contain	"
            src="/static/assets/inega.png"
          />
          <img
            class="w-48 mx-4 object-contain	"
            src="/static/assets/times_talent.png"
          />
          <img
            class="w-48 mx-4 object-contain	"
            src="/static/assets/theagencysrilanka.png"
          />
          {/* <img
            class="w-48 mx-4 object-contain	"
            src="/static/assets/daleseden.jpg"
          /> */}
          <img
            class="w-48 h-auto mx-4 object-contain	"
            src="/static/assets/cf-logo.svg"
          />
        </div>
      </section>
    </main>
    <section class="my-2 py-2 italic bg-gray-100">
      <h3 class="font-extrabold text-xl lg:text-4xl py-4 text-center">
        Reach out to us at hello@neev.io
      </h3>
    </section>
    <footer class="container mx-auto text-center my-10 py-2">
      &copy; 2019 Copyright Neev Labs. All rights reserved.
    </footer>
  </>
);

export default App;
