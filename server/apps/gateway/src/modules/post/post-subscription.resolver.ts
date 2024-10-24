import { Inject } from '@nestjs/common';
import { Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Comment } from '../../proto/post';

@Resolver('Post')
export class PostSubscriptionResolver {
  constructor(
    @Inject('PubSubService') private readonly pubSubService: PubSub,
  ) {}

  @Subscription('commentAdded', {
    resolve: (value: Comment) => value,
    filter: (payload: Comment, variables: Record<string, any>) =>
      payload.postId === variables.postId,
  })
  commentAdded(): AsyncIterator<unknown, any, undefined> {
    return this.pubSubService.asyncIterator('commentAdded');
  }
}
