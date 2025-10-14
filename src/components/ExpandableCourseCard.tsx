import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

export interface CourseData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  program: {
    title: string;
    sections: {
      title: string;
      description: string;
      items: string[];
    }[];
  };
  benefits: {
    title: string;
    items: string[];
  };
  info: {
    duration: string;
    price: string;
    modality: string;
    participants: string;
  };
  buttonText: string;
  buttonLink: string;
}

interface ExpandableCourseCardProps {
  course: CourseData;
  isExpanded: boolean;
  onToggle: () => void;
}

const ExpandableCourseCard: React.FC<ExpandableCourseCardProps> = ({ 
  course, 
  isExpanded, 
  onToggle 
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="p-6 sm:p-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Immagine */}
          <div className="order-2 lg:order-1">
            <img 
              src={course.image} 
              alt={course.imageAlt}
              className="w-full h-48 sm:h-56 object-cover rounded-xl shadow-lg"
              loading="lazy"
            />
          </div>
          
          {/* Contenuto */}
          <div className="order-1 lg:order-2">
            <h4 className="text-2xl sm:text-3xl font-bold text-black mb-3">{course.title}</h4>
            <p className="text-lg text-gray-700 font-medium mb-4">{course.subtitle}</p>
            <p className="text-gray-700 leading-relaxed mb-6 text-sm">
              {course.description}
            </p>
            
            {/* Pulsante Scopri di più */}
            <button
              onClick={onToggle}
              className="w-full bg-black text-white px-6 py-3 rounded-full font-medium text-sm flex items-center justify-center gap-2 group relative overflow-hidden transition-all duration-500 ease-out hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:shadow-xl hover:shadow-yellow-500/30 hover:brightness-110 hover:text-black"
            >
              <span className="relative z-10">
                {isExpanded ? 'Mostra meno' : 'Scopri di più'}
              </span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-500 ease-out relative z-10" />
              ) : (
                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-500 ease-out relative z-10" />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
            </button>
          </div>
        </div>
        
        {/* Contenuto espandibile */}
        {isExpanded && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="space-y-6">
              {/* Programma del corso */}
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h5 className="font-bold text-black mb-3 text-sm">{course.program.title}</h5>
                <div className="space-y-3">
                  {course.program.sections.map((section, index) => (
                    <div key={index}>
                      <h6 className="font-semibold text-black mb-2 text-sm">{section.title}</h6>
                      <p className="text-xs text-gray-700 mb-2">{section.description}</p>
                      <ul className="text-xs text-gray-700 space-y-1 ml-4">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Benefici */}
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <h5 className="font-bold text-black mb-3 text-sm">{course.benefits.title}</h5>
                <ul className="text-xs text-gray-700 space-y-1">
                  {course.benefits.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              {/* Informazioni generali */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="bg-black text-white px-4 py-2 rounded-lg">
                  <p className="text-xs font-medium">Durata: {course.info.duration}</p>
                  <p className="text-sm font-bold">Prezzo: {course.info.price}</p>
                </div>
                <div className="bg-gray-100 text-black px-4 py-2 rounded-lg">
                  <p className="text-xs font-medium">Modalità: {course.info.modality}</p>
                  <p className="text-xs">{course.info.participants}</p>
                </div>
              </div>
              
              {/* Pulsante iscrizione */}
              <div className="flex items-center justify-center">
                <Link 
                  to={course.buttonLink}
                  className="w-full bg-black text-white px-6 py-3 rounded-full font-medium text-sm flex items-center justify-center gap-2 group relative overflow-hidden transition-all duration-500 ease-out hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:shadow-xl hover:shadow-yellow-500/30 hover:brightness-110 hover:text-black"
                >
                  <span className="relative z-10">{course.buttonText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500 ease-out relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpandableCourseCard;
