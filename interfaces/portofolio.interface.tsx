export default interface imageData {
    id: number;
    banner_url: string;
    job_description: string;
    project_title: string;
    created_at: string,
    project_start_date: string,
    project_end_date: string,
    description: string,
    detail_description: string,
    fitur: string[],
    project_result: string,
    stack: string,
    image_preview: string[],
    ui_source: string,
    video_url: string | null,
    app_url: string | null,
    repository_url: string,
    stack_list: string[],
}