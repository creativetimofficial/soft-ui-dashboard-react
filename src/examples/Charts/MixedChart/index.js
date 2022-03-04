/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useRef, useEffect, useState, useMemo } from "react";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-chartjs-2 components
import { Line } from "react-chartjs-2";

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard React helper functions
import gradientChartLine from "assets/theme/functions/gradientChartLine";

// MixedChart configurations
import configs from "examples/Charts/MixedChart/configs";

// Soft UI Dashboard React base styles
import colors from "assets/theme/base/colors";

function MixedChart({ title, description, height, chart }) {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({});
  const { data, options } = chartData;

  useEffect(() => {
    const chartDatasets = chart.datasets
      ? chart.datasets.map((dataset) => {
          let finalConfigs;

          const defaultLine = {
            ...dataset,
            type: "line",
            tension: 0.4,
            borderWidth: 3,
            pointRadius: 2,
            pointBackgroundColor: colors[dataset.color]
              ? colors[dataset.color || "dark"].main
              : colors.dark.main,
            borderColor: colors[dataset.color]
              ? colors[dataset.color || "dark"].main
              : colors.dark.main,
            maxBarThickness: 6,
          };

          const gradientLine = {
            ...dataset,
            type: "line",
            tension: 0.4,
            pointRadius: 0,
            borderWidth: 3,
            borderColor: colors[dataset.color]
              ? colors[dataset.color || "dark"].main
              : colors.dark.main,
            fill: true,
            maxBarThickness: 6,
            backgroundColor: gradientChartLine(
              chartRef.current.children[0],
              colors[dataset.color] ? colors[dataset.color || "dark"].main : colors.dark.main
            ),
          };

          const bar = {
            ...dataset,
            type: "bar",
            weight: 5,
            borderWidth: 0,
            borderRadius: 4,
            backgroundColor: colors[dataset.color]
              ? colors[dataset.color || "dark"].main
              : colors.dark.main,
            fill: false,
            maxBarThickness: 35,
          };

          const thinBar = {
            ...dataset,
            type: "bar",
            weight: 5,
            borderWidth: 0,
            borderRadius: 4,
            backgroundColor: colors[dataset.color]
              ? colors[dataset.color || "dark"].main
              : colors.dark.main,
            fill: false,
            maxBarThickness: 10,
          };

          if (dataset.chartType === "default-line") {
            finalConfigs = defaultLine;
          } else if (dataset.chartType === "gradient-line") {
            finalConfigs = gradientLine;
          } else if (dataset.chartType === "thin-bar") {
            finalConfigs = thinBar;
          } else {
            finalConfigs = bar;
          }

          return { ...finalConfigs };
        })
      : [];

    setChartData(configs(chart.labels || [], chartDatasets));
  }, [chart]);

  const renderChart = (
    <SuiBox p={2}>
      {title || description ? (
        <SuiBox px={description ? 1 : 0} pt={description ? 1 : 0}>
          {title && (
            <SuiBox mb={1}>
              <SuiTypography variant="h6">{title}</SuiTypography>
            </SuiBox>
          )}
          <SuiBox mb={2}>
            <SuiTypography component="div" variant="button" fontWeight="regular" color="text">
              {description}
            </SuiTypography>
          </SuiBox>
        </SuiBox>
      ) : null}
      {useMemo(
        () => (
          <SuiBox ref={chartRef} sx={{ height }}>
            <Line data={data} options={options} />
          </SuiBox>
        ),
        [chartData, height]
      )}
    </SuiBox>
  );

  return title || description ? <Card>{renderChart}</Card> : renderChart;
}

// Setting default values for the props of MixedChart
MixedChart.defaultProps = {
  title: "",
  description: "",
  height: "19.125rem",
};

// Typechecking props for the MixedChart
MixedChart.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  chart: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default MixedChart;
