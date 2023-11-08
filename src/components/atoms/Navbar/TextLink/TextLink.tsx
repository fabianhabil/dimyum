import Link from 'next/link';

const TextLink = ({ text, href }: { text: string; href: string }) => {
  return (
    <>
      <Link href={href}>
        <p className="font-semibold uppercase underline-offset-4 hover:underline">{text}</p>
      </Link>
    </>
  );
};

export default TextLink;
