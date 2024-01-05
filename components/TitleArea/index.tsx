import React from 'react'

const TitleArea = ({title, text}: {title: string, text: string}) => {
  return (
    <div className="container pt-12 px-10 not-animate">
      <h2 className="projects relative text-center text-2xl font-bold leading-tight text-black dark:text-white sm:leading-tight md:text-3xl lg:text-4xl md:leading-tight">
        <span className="bg-white dark:bg-black z-0 px-8">{title}</span>
      </h2>
      <p className="text-base my-4 text-center !leading-relaxed dark:text-dark-mode text-body-color md:text-lg">
        {text}
      </p>
    </div>
  )
}

export default TitleArea