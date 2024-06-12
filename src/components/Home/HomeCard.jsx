import React from 'react'
import CTA from '../Shared/ToViewCTA';

function Card({ pathName, isBgImage = false, bgImage, BestGearImage, BestGearImageTablet, padding, width, isAudioCard = false, isHeading = false, isButton = false, titleName = '' }) {
    // Adding some default classes that would remain same on all the components
    const mainContDefaultCls = `flex overflow-hidden justify-center mb-10 rounded-lg bg-[rgb(241,241,241)]`;

    // This checks whether you want to add the background image to the main container or not
    const backgroundImageProps = isBgImage ? {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
    } : {};

    return (
        <>
            {isAudioCard ? (
                <>
                    <div className={`xl:h-[640px] lg:h-[580px] h-auto lg:w-[90%] w-auto ${mainContDefaultCls}`} style={{ padding: padding, justifyContent: 'start', width: width }}>
                        <img className='lg:block xs:hidden block h-full w-full' src={BestGearImage} alt="" />
                        <img className='lg:hidden xs:block hidden h-full w-full' src={BestGearImageTablet} alt="" />
                        <div className='h-full flex flex-col items-start justify-center z-[1]'>
                            {isHeading ?
                                <h2 style={{ marginBottom: '35px' }} className='text-black text-3xl font-black tracking-[2.2px]'>
                                    {titleName}
                                </h2>
                                : null
                            }
                            {isButton ?
                                <CTA pathname={pathName} bgColor='' btnTextColorOnHover='white' border='1px solid black' hoverBgColor='black' />
                                : null
                            }
                        </div>
                    </div >
                </>
            ) : (
                <div className={`lg:h-[320px] h-full bg-center xs:p-24 py-24 w-full ${mainContDefaultCls}`} style={{ justifyContent: 'start', ...backgroundImageProps, width: width }}>
                    <div className='h-full w-full flex flex-col xs:items-start items-center justify-center z-[1]'>
                        {isHeading ?
                            <h2 style={{ marginBottom: '35px' }} className='text-black text-3xl font-black tracking-[2.2px]'>
                                {titleName}
                            </h2>
                            : null
                        }
                        {isButton ?
                            <CTA pathname={pathName} bgColor='' btnTextColorOnHover='white' border='1px solid black' hoverBgColor='black' />
                            : null
                        }
                    </div>
                </div>
            )
            }
        </>
    )
}

export default Card