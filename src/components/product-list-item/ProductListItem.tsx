interface ProductListItemProps {
  children: string;
}

export function ProductListItem(props: ProductListItemProps) {
  const { children } = props;

  return <h3>{children}</h3>;
}
