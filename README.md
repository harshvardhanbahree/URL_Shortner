# URL Shortener Project

This project is a simple URL shortener service that provides the ability to create shortened URLs, redirect to the original URL, and track the number of visits with timestamps.

## Features

- **Create Shortened URL**: Generate a short ID for a given URL.
- **Redirect to Original URL**: Redirect users to the original URL based on the short ID.
- **Analytics**: Track and return the number of visits and the timestamps for each visit.

## API Endpoints

### 1. Create Shortened URL

- **Endpoint**: `POST /url`
- **Description**: Creates a short ID for the provided URL and stores it.
- **Request Body**:
  ```json
  {
    "url": "https://example.com"
  }
  ```
- **Response**:
  ```json
  {
    "shortId": "abc123",
    "url": "https://example.com"
  }
  ```

### 2. Redirect to the Original URL

- **Endpoint**: `GET /url/:id`
- **Description**: Redirects to the original URL based on the provided short ID.
- **Response**: Redirects to the original URL.

### 3. URL Analytics

- **Endpoint**: `GET /analytics/:shortId`
- **Description**: Returns the number of times the URL was visited and the timestamps of the visits.
- **Response**:
  ```json
  {
    "shortId": "abc123",
    "url": "https://example.com",
    "visitCount": 10,
    "visitHistory": [
      "2024-06-01T12:00:00Z",
      "2024-06-02T15:30:00Z",
      ...
    ]
  }
  ```

## Schema Model

The data is stored in the following schema:

```json
{
  "shortId": "abc123",
  "url": "https://example.com",
  "visitHistory": [
    "2024-06-01T12:00:00Z",
    "2024-06-02T15:30:00Z",
    ...
  ]
}
```
