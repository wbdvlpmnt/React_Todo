// Imports
import { describe, afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import * as services from "../services/service";
import axios from "axios";

// To Test

// Tests
describe("Services", async () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("should post to service", async () => {
    vi.mock("axios");
    services.postNewTask("http://test.com", {
      title: "test_title",
      description: "test_description",
    });
    expect(axios).toBeCalledWith({
      data: {
        description: "test_description",
        title: "test_title",
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      method: "POST",
      url: "http://test.com",
    });
  });

  it("should put to service", async () => {
    vi.mock("axios");
    services.putTask("http://test.com", {
      title: "test_title",
      description: "test_description",
    });
    expect(axios).toBeCalledWith({
      data: {
        description: "test_description",
        title: "test_title",
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      method: "PUT",
      url: "http://test.com",
    });
  });

  it("should delete to service", async () => {
    vi.mock("axios");
    services.deleteItem("http://test.com");
    expect(axios).toBeCalledWith({
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      method: "DELETE",
      url: "http://test.com",
    });
  });
});
