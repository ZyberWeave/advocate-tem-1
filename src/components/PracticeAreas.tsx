'use client';
import { ParallaxProvider } from 'react-scroll-parallax';
import { FaBalanceScale, FaCopyright, FaLandmark } from 'react-icons/fa';

const practiceAreas = [
  { 
    title: 'Corporate Law', 
    icon: FaLandmark,
    description: 'Expert guidance on corporate governance, mergers & acquisitions, compliance, and business formation.',
    highlights: [
      'Business formation',
      'Mergers & acquisitions',
      'Corporate governance',
      'Regulatory compliance'
    ]
  },
  { 
    title: 'Intellectual Property', 
    icon: FaCopyright,
    description: 'Comprehensive protection for patents, trademarks, copyrights, and trade secrets.',
    highlights: [
      'Patent filing',
      'Trademark registration',
      'Copyright protection',
      'IP litigation'
    ]
  },
  { 
    title: 'Civil Litigation', 
    icon: FaBalanceScale,
    description: 'Representation in civil disputes including contracts, personal injury, and property disputes.',
    highlights: [
      'Contract disputes',
      'Personal injury',
      'Property claims',
      'Class actions'
    ]
  }
];

export default function PracticeAreas() {
  return (
    <ParallaxProvider>
      <section id="practice" className="py-20 px-4 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Practice Areas
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized legal services tailored to your specific needs
            </p>
          </div>

          {/* Practice Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300"
              >
                {/* Icon Header */}
                <div className="bg-blue-600 p-6 text-white">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto">
                  <span className="w-6 h-6 text-white">
+   <area.icon size={24} />
+ </span>{/* Added icon inside the circle */}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-center">
                    {area.description}
                  </p>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                      Key Services
                    </h4>
                    <ul className="space-y-3">
                      {area.highlights.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">
              Don&apos;t see your specific legal need listed? We handle many more specialized areas.
            </p>
            <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Contact Us for a Consultation
            </button>
          </div>
        </div>
      </section>
    </ParallaxProvider>
  );
}