export const TableRowSkeletion = ({ rows, cols }: Readonly<{ rows: number; cols: number }>) => {
    return (
        <>
            {[...Array(rows)].map((_, i: number) => (
                <tr key={`rows-${i}`}>
                    {[...Array(cols)].map((_, y: number) => (
                        <td key={`row-${i}-col-${y}`} className="p-3 border border-gray-800">
                            <p className="w-full h-2 rounded-full bg-gray-400 dynamic-pulse" />
                        </td>
                    ))}
                </tr>
            ))}
        </>
    );
};
