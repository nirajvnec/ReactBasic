public class ReportStatusRepository : IReportStatusRepository
{
    private readonly AppDbContext _context;

    public ReportStatusRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<ReportStatusSummaryDto> GetReportStatusSummaryAsync()
    {
        var groupedCounts = await _context.PvReadiness
            .GroupBy(r => r.ReportStatus)
            .Select(g => new { Status = g.Key, Count = g.Count() })
            .ToListAsync();

        var summary = new ReportStatusSummaryDto();

        foreach (var item in groupedCounts)
        {
            switch (item.Status?.ToLower())
            {
                case "in progress":
                    summary.InProgress = item.Count;
                    break;
                case "completed":
                    summary.Completed = item.Count;
                    break;
                case "failed":
                    summary.Failed = item.Count;
                    break;
            }
        }

        return summary;
    }
}