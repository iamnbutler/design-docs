export default function PageProse({ title = "Page Title", description, children }) {
  return (
    <>
      <div className="my-8 prose prose-invert">
        <div className="text-lg">
          <span className="block text-base font-semibold tracking-wide uppercase">
            {description && (
              <p className="description text-base0B">
                {description}
              </p>
            )}
          </span>
          <h1 className={`block ${description && `mt-1`} text-4xl font-extrabold leading-8 tracking-tight text-base0C sm:text-4xl`}>
            {title}
          </h1>
        </div>
        {children && (
          <main className="mx-auto mt-6 text-xl prose prose-xl text-base07">
            {children}
          </main>
        )}
      </div>
    </>
  );
}