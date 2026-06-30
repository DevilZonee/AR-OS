"use client";

interface Props {
  text: string;
}

export default function BootText({ text }: Props) {
  return (
    <p className="mt-5 text-sm text-gray-300 tracking-[4px] uppercase">
      {text}
    </p>
  );
}