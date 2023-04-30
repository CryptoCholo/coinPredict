import { Fragment} from 'react';
import { Outlet } from "react-router-dom";
import { Disclosure,  Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';


const navigation = [
    { name: 'Home', href: '/'},
    { name: 'Bitcoin', href: 'btc'},
    { name: 'Ethereum', href: 'eth'},
    { name: 'Solana', href: 'sol'},
    { name: 'Binance Coin', href: 'bnb'},
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Nav() {
    return (
        <>
          <div className="h-screen w-screen flex align-center justify-center">
          <div className="h-full w-full static flex flex-col align-center justify ">
            <Disclosure as="nav" className="bg-indigo-900 rounded-md w-full z-50 fixed top-0">
              {({ open }) => (
                <>
                  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="h-8 w-8"
                            src="https://boostylabs.com/img/crypto.svg"
                            alt="Your Company"
                          />
                        </div>
                        <div className="hidden md:block">
                          <div className="ml-10 flex items-baseline space-x-4">
                            {navigation.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                  item.current ? 'bg-indigo-100 text-indigo-900' : 'text-indigo-100 hover:bg-indigo-500 hover:text-indigo-700', 'px-3 py-2 rounded-md text-sm font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                          <button
                            type="button"
                            className="rounded-full bg-indigo-900 p-2 text-indigo-100 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-900"
                          >
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <div className="-mr-2 flex md:hidden">
                        {/* Mobile menu button */}
                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-indigo-900 p-2 text-indigo-100 hover:bg-indigo-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700">
                          <span className="sr-only">Open main menu</span>
                          {open ? (
                            <XMarkIcon className="block h-8 w-8 bg-indigo-900" aria-hidden="true" />
                          ) : (
                            <Bars3Icon className="block h-8 w-8 bg-indigo-900 " aria-hidden="true" />
                          )}
                        </Disclosure.Button>
                      </div>
                    </div>
                  </div>
                  <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                  >
                    <Disclosure.Panel className="md:hidden">
                      <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                        {navigation.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.name === 'Home' ? '/' : item.href}
                            className={classNames(
                              item.current ? 'bg-indigo-100 text-indigo-900' : 'text-indigo-100 hover:bg-indigo-700 hover:text-stone-900',
                              'block px-3 py-2 rounded-md text-base font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                           {item.name}
                          </Disclosure.Button>
                        ))}
                      </div>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
              
            </Disclosure>
            <Outlet />
          </div>
          </div>
        </>
      )
  }
