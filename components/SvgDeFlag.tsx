export const SvgDeFlag = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='512'
      height='512'
      viewBox='0 0 512 512'
      className="w-8 h-8"
    >
      <mask id='a'>
        <circle cx='256' cy='256' r='256' fill='#fff' />
      </mask>
      <g mask='url(#a)'>
        <path fill='#ffda44' d='m0 345 256.7-25.5L512 345v167H0z' />
        <path fill='#d80027' d='m0 167 255-23 257 23v178H0z' />
        <path fill='#333' d='M0 0h512v167H0z' />
      </g>
    </svg>
  )
}
