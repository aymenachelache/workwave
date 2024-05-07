import { ResponsiveBar } from '@nivo/bar'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const ProjectsByMonths = ({ data /* see data tab */ }) => (
    <div className="flex-wrap h-[230px] w-80 rounded-2xl shadow-xl border-2 border-PrimColor">
        <p className="text-PrimColor text-opacity-60 font-semibold px-5 py- ">Projects By Months</p>
        <ResponsiveBar
            data={data}
            keys={['projects']}
            indexBy="month"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.65}
            borderRadius={0}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={({ data }) => data.color}
            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={null}
            axisLeft={null}
            enableLabel={false}
            labelSkipWidth={12}
            labelSkipHeight={12}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            role="application"
            isFocusable={true}
            ariaLabel="Projects per month bar chart"
            barAriaLabel={e => `${e.id}: ${e.formattedValue} projects in ${e.indexValue}`}
        />
    </div>
)

export default ProjectsByMonths