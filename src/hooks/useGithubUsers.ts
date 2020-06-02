import { onMounted, ref, Ref } from "@vue/composition-api";
import { useLoading } from "@/hooks/useLoading";
import * as R from "ramda";
import { GithubUser } from "@/types/github_users";
import {
  api_github_contributors,
  api_github_fetchUsers
} from "@/api/api_github";

export const useGithubUsers = () => {
  const { showLoading, hideLoading } = useLoading();
  showLoading();

  const usernames: Ref<string[]> = ref([]);
  onMounted(async () => {
    // github random users
    usernames.value = R.pipe(
      R.map((user: GithubUser) => user.login),
      R.tap(hideLoading)
    )(await api_github_fetchUsers());
    // my github contributors
    console.log(await api_github_contributors());
  });

  return { usernames };
};
