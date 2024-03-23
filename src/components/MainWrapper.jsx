export default function MainWrapper({ children, classes = "" }) {
  return <main className={`sm:ml-80 p-7 h-screen ${classes}`}>{children}</main>;
}
