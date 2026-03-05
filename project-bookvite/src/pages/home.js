import { Navbar } from '../components/navbar.js'

export function HomePage() {
  return `
    <div class="min-h-screen px-10 py-6">

      ${Navbar()}

      <section class="mt-10">
        <h1 class="text-4xl font-bold">BookVite</h1>
        <p class="mt-2">Find trusted local services</p>
      </section>

    </div>
  `
}