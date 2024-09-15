import { Disclosure } from '@headlessui/react';
import { Fragment, useState } from 'react';

const navigation = [
  { name: 'HTML', href: '#', current: true },
  { name: 'CSS', href: '#', current: false },
  { name: 'JAVASCRIPT', href: '#', current: false },
  { name: 'REACT JS', href: '#', current: false },
  { name: 'NEXT JS', href: '#', current: false },
  { name: 'REACT NATIVE', href: '#', current: false },
  { name: 'ANGULAR JS', href: '#', current: false },
  { name: 'VUE', href: '#', current: false },
  { name: 'NODE JS', href: '#', current: false },
  { name: 'EXPRESS JS', href: '#', current: false },
  { name: 'MONGODB', href: '#', current: false },
  { name: 'MYSQL', href: '#', current: false },
  { name: 'BOOTSTRAP', href: '#', current: false },
  { name: 'MATERIAL UI', href: '#', current: false },
  { name: 'TAILWIND CSS', href: '#', current: false },
 
];



export default function CourseBar({selectedCourse, setSelectedCourse}) {

 
    const CourseSelected = (select)=> {
        setSelectedCourse(select);

     }
  return (
    <div className="overflow-x-auto whitespace-nowrap bg-green-900 sticky top-16 z-9999" style={{ scrollbarWidth: 'thin', backgroundColor: '#1F2937', zIndex: '9999' }} >
      <Disclosure as="nav" className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        {({ open }) => (
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={()=>CourseSelected(item.name)}
                  className={`text-white px-5 py-2 text-sm font-medium ${item.current ? 'bg-gray-900' : 'hover:bg-gray-700 hover:text-white'}`}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </Disclosure>
    </div>
  );
}
