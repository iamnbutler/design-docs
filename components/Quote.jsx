function QuoteAttribution({ author, media, url }) {
  return (
    <figcaption className="border-t border-base0F/10 px-4 py-1 text-base05 text-[0.9rem] bg-base0F/5">
      {author},{" "}
      <a href={url}>
        <cite className="underline hover:text-base0A underline-offset-4 decoration-base04 hover:decoration-base0A">
          {media}
        </cite>
      </a>
    </figcaption>
  );
}

export default function Quote({ children, author, media_name, media_url }) {
  return (
    <div className="w-11/12 -mx-4 not-prose">
      <figure className="border rounded-lg shadow border-base0F/10 text-base07 bg-base0F/5">
        <blockquote
          className="font-serif p-4 text-[1.25rem] space-y-4 leading-normal"
          cite={media_url}
        >
          {children}
        </blockquote>
        <QuoteAttribution author={author} media={media_name} url={media_url} />
      </figure>
    </div>
  );
}
