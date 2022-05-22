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
            <div className="mb-12">
              <h1>{title}</h1>
              <p className="italic opacity-60">{description}</p>
            </div>
            {children}
          </main>
        )}
      </div>
    </>
  );
}
