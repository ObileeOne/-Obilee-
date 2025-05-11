<script>
  // Simulated data for User Growth (users joining over time)
  const userGrowthData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{
      label: 'User Growth',
      data: [100, 200, 300, 500, 700],  // Simulated user growth
      backgroundColor: ['#00bcd4', '#ff6384', '#36a2eb', '#4bc0c0', '#ff9f40'],
      borderColor: 'transparent', // No borders
      hoverBackgroundColor: ['#0199a8', '#ff4174', '#288fd9', '#37a99a', '#ff6f2c'],
      borderWidth: 2,
      fill: false,
    }]
  };

  // Simulated data for Engagement Metrics (Likes, Shares, and Comments)
  const engagementData = {
    labels: ['Likes', 'Shares', 'Comments'],
    datasets: [{
      data: [500, 150, 100], // Simulated likes, shares, and comments data
      backgroundColor: ['#ff6384', '#36a2eb', '#4bc0c0'],  // Pie chart segments
      borderColor: 'transparent', // No borders
      hoverBackgroundColor: ['#ff4174', '#288fd9', '#37a99a'],
      borderWidth: 2
    }]
  };

  // Simulated data for Individual User Progress (follower count for a user)
  const userProgressData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
    datasets: [{
      label: 'Follower Count',
      data: [50, 120, 190, 250, 300],  // Simulated follower progress
      backgroundColor: 'rgba(0, 188, 212, 0.2)',
      borderColor: '#00bcd4',
      borderWidth: 2,
      fill: true,
    }]
  };

  // Initialize the User Growth Pie Chart
  const userGrowthChart = new Chart(document.getElementById('userGrowthChart').getContext('2d'), {
    type: 'pie',
    data: userGrowthData,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            font: { size: 14 },
            padding: 15
          }
        }
      }
    }
  });

  // Initialize the Engagement Metrics Pie Chart
  const engagementChart = new Chart(document.getElementById('engagementChart').getContext('2d'), {
    type: 'pie',
    data: engagementData,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            font: { size: 14 },
            padding: 15
          }
        }
      }
    }
  });

  // Initialize the User Progress Line Chart
  const userProgressChart = new Chart(document.getElementById('userProgressChart').getContext('2d'), {
    type: 'line',
    data: userProgressData,
    options: {
      responsive: true,
      scales: {
        x: { beginAtZero: true },
        y: { beginAtZero: true }
      },
      elements: { line: { tension: 0.4 } }, // Smooth curve
      plugins: {
        legend: { position: 'top' }
      }
    }
  });

</script>