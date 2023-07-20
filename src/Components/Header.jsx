import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import talemLogo from '.././Images/talemLogo.png'

const navigation = [
  { name: 'Homepage', href: '/' },
  { name: 'Extracurriculars', href: '/extracurriculars' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Community', href: 'https://discord.gg/tP97h8kWUx'}
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                  width="500.000000pt" height="500.000000pt" viewBox="0 0 500.000000 500.000000" className='h-8 w-auto'
                  preserveAspectRatio="xMidYMid meet">

                  <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
                  fill="#2532a5" stroke="none">
                  <path d="M583 4110 c-50 -30 -68 -66 -68 -135 l0 -60 369 -583 368 -583 84
                  143 83 143 -18 30 c-10 16 -118 192 -240 390 -122 197 -223 363 -224 367 -1 4
                  278 9 621 10 357 2 622 -1 622 -6 0 -5 -250 -439 -555 -966 -601 -1036 -577
                  -988 -536 -1068 32 -62 55 -77 121 -77 39 0 64 5 76 16 37 32 2566 1771 2570
                  1767 6 -6 -620 -1017 -1309 -2111 l-55 -88 -193 318 c-106 175 -194 320 -195
                  322 -2 2 -60 -33 -129 -79 -119 -79 -125 -84 -112 -104 7 -12 123 -199 256
                  -416 134 -217 261 -412 281 -432 21 -21 50 -40 65 -44 39 -10 102 12 140 49
                  18 18 230 354 470 747 241 393 654 1063 917 1488 264 425 484 788 489 807 12
                  42 -3 104 -29 128 -48 44 -135 59 -196 33 -52 -22 -344 -220 -1495 -1015 -590
                  -408 -1075 -740 -1077 -738 -2 1 182 324 408 717 407 708 488 859 488 906 0
                  34 -34 98 -66 123 -27 21 -28 21 -963 21 -910 0 -937 -1 -968 -20z"/>
                  </g>
                </svg>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />  
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="https://forms.gle/YEmqpvWMTEA1X2ye9" target='_blank' className="text-sm font-semibold leading-6 text-gray-900">
              Submit an Activity <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                  width="500.000000pt" height="500.000000pt" viewBox="0 0 500.000000 500.000000" className='h-8 w-auto'
                  preserveAspectRatio="xMidYMid meet">

                  <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
                  fill="#2532a5" stroke="none">
                  <path d="M583 4110 c-50 -30 -68 -66 -68 -135 l0 -60 369 -583 368 -583 84
                  143 83 143 -18 30 c-10 16 -118 192 -240 390 -122 197 -223 363 -224 367 -1 4
                  278 9 621 10 357 2 622 -1 622 -6 0 -5 -250 -439 -555 -966 -601 -1036 -577
                  -988 -536 -1068 32 -62 55 -77 121 -77 39 0 64 5 76 16 37 32 2566 1771 2570
                  1767 6 -6 -620 -1017 -1309 -2111 l-55 -88 -193 318 c-106 175 -194 320 -195
                  322 -2 2 -60 -33 -129 -79 -119 -79 -125 -84 -112 -104 7 -12 123 -199 256
                  -416 134 -217 261 -412 281 -432 21 -21 50 -40 65 -44 39 -10 102 12 140 49
                  18 18 230 354 470 747 241 393 654 1063 917 1488 264 425 484 788 489 807 12
                  42 -3 104 -29 128 -48 44 -135 59 -196 33 -52 -22 -344 -220 -1495 -1015 -590
                  -408 -1075 -740 -1077 -738 -2 1 182 324 408 717 407 708 488 859 488 906 0
                  34 -34 98 -66 123 -27 21 -28 21 -963 21 -910 0 -937 -1 -968 -20z"/>
                  </g>
                </svg>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="https://forms.gle/YEmqpvWMTEA1X2ye9" target='_blank'
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Submit an Activity
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-7 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
