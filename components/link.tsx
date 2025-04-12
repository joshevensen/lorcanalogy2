import * as React from "react";
import NextLink from "next/link";


function Link({className, children, href = ''}: React.ComponentProps<"a">) {
  return (
    <NextLink className={className} href={href}>
      {children}
    </NextLink>
  )
}

export {Link};
