// @ts-ignore

export function groupByInterval(data, startTime, interval, format) {
    const groupedData = {};
    data?.forEach((branch: any) => {
        const timestamp = new Date(branch.timestamp).getTime();
        const intervalKey = new Date(
            Math.floor((timestamp - startTime) / interval) * interval + startTime
        );

        // @ts-ignore
        if (!groupedData[intervalKey.toISOString()]) {
            // @ts-ignore
            groupedData[intervalKey.toISOString()] = [];
        }
        // @ts-ignore
        groupedData[intervalKey.toISOString()].push(branch);
    });

    // Sort keys in ascending order
    const sortedKeys = Object.keys(groupedData).sort();

    const formattedData: Record<string, any[]> = {};
    sortedKeys.forEach(key => {
        // @ts-ignore
        const date = new Date(key);
        // @ts-ignore
        formattedData[date.toLocaleString('en-US', format)] = groupedData[key];
    });
    return formattedData;
}
