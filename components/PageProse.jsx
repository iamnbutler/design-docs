export default function PageProse({
  title = "Page Title",
  description,
  children,
}) {
  return (
    <>
      <div className="px-8 prose">
        <div className="text-lg"></div>
        {children && (
          <main className="mt-6 text-xl prose prose-xl text-base06">
            <h1
            >
              {title}
            </h1>
            {children}
          </main>
        )}
      </div>
    </>
  );
}
