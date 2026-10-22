
type CustomDivProps = React.HTMLAttributes<HTMLDivElement> & {
    className?: string, image?: string, children?: React.ReactNode
};

export default function Divbg({ className = "", image = "", children,style={}, ...rest }: CustomDivProps) {
    return (
        <div className={"bg-center bg-cover bg-no-repeat " + className} style={{
            backgroundImage: `url(${image})`,
            ...style
        }} {...rest}>
            {children}
        </div>
    )
}
