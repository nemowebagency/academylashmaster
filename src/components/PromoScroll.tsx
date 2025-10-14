import React from 'react';

const PromoScroll = () => {
  return (
    <>
      {/* Promo Banner */}
      <div className="bg-white text-black py-1 px-0 overflow-hidden fixed top-0 left-0 right-0 z-50" style={{height: '32px', paddingTop: '4px', paddingBottom: '4px'}}>
        <div className="flex animate-scroll-infinite">
          <div className="flex items-center space-x-8 whitespace-nowrap">
            {[...Array(10)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="text-sm font-medium">
                  Vieni a scoprire i miei corsi!
                </span>
                <span className="text-sm font-medium">•</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PromoScroll;
